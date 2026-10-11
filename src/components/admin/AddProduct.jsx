import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateProduct } from '../../features/products/productsSlice'
import '../../assets/style/addproduct.css'
import { Link, useParams } from 'react-router'

const productImageAssets = import.meta.glob('../../assets/images/**/*', {
    eager: true,
    query: '?url',
    import: 'default',
})


const emptyFormState = {
    name: '',
    brand: '',
    category: '',
    subcategory: '',
    sku: '',
    price: '',
    originalPrice: '',
    discount: '',
    stock: '',
    status: 'Active',
    isFeatured: false,
    isNew: false,
    isBestSeller: false,
    description: ''
}

const createSpecification = () => ({
    id: Date.now() + Math.random(),
    field: '',
    value: ''
})

const getFormState = (product) => ({ ...emptyFormState, ...product })

const getProductImages = (product) => {
    if (product?.images?.length) {
        return product.images
    }
    return product?.image ? [product.image] : []
}

const getProductImageUrl = (image) => image?.startsWith('/')
    ? image
    : productImageAssets[`../../assets/images/${image}`] || image

const getProductSpecifications = (product) => Object.entries(product?.specifications ?? {}).map(([field, value]) => ({
    ...createSpecification(),
    field,
    value: String(value ?? '')
}))

const ProductForm = ({ productId, productToEdit, productList }) => {
    const dispatch = useDispatch()

    const [selectedImages, setSelectedImages] = useState(() => {
        return getProductImages(productToEdit)
    })
    const [selectedFiles, setSelectedFiles] = useState([])
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [colors, setColors] = useState(() => productToEdit?.colors ?? [])
    const [specifications, setSpecifications] = useState(() => getProductSpecifications(productToEdit))
    const descriptionRef = useRef(null)

    const [formData, setFormData] = useState(() => getFormState(productToEdit))

    const [descriptionCount, setDescriptionCount] = useState((productToEdit?.description ?? '').trim().length)

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData((previous) => ({
            ...previous,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleDescriptionChange = () => {
        const htmlContent = descriptionRef.current?.innerHTML ?? ''
        const plainText = descriptionRef.current?.innerText ?? ''
        setFormData((previous) => ({
            ...previous,
            description: htmlContent
        }))
        setDescriptionCount(plainText.replace(/\s+/g, ' ').trim().length)
    }

    const handleFormat = (command) => {
        document.execCommand(command, false, null)
        handleDescriptionChange()
    }

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files || [])
        if (!files.length) return

        const imageReaders = files.map((file) => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(file)
        }))

        Promise.all(imageReaders)
            .then((images) => {
                setSelectedImages(images)
                setSelectedFiles(files)
                setMessage('')
            })
            .catch((error) => {
                setSelectedImages([])
                setSelectedFiles([])
                setMessage(`Unable to read selected image: ${error.message}`)
            })
    }

    const handleAddColor = () => {
        setColors((previous) => [...previous, ''])
    }

    const handleColorChange = (index, value) => {
        setColors((previous) => previous.map((color, colorIndex) => (
            colorIndex === index ? value : color
        )))
    }

    const handleRemoveColor = (index) => {
        setColors((previous) => previous.filter((_, colorIndex) => colorIndex !== index))
    }

    const handleAddSpecification = () => {
        setSpecifications((previous) => [...previous, createSpecification()])
    }

    const handleSpecificationChange = (id, field, value) => {
        setSpecifications((previous) => previous.map((item) => (
            item.id === id ? { ...item, [field]: value } : item
        )))
    }

    const handleRemoveSpecification = (id) => {
        setSpecifications((previous) => previous.filter((specification) => specification.id !== id))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isSubmitting) return

        const requiredFields = [
            (formData.name ?? '').trim(),
            (formData.brand ?? '').trim(),
            formData.category ?? '',
            (formData.sku ?? '').trim(),
            formData.price,
            formData.stock
        ]

        if (requiredFields.some((value) => value === '' || value === null || value === undefined)) {
            setMessage('Please fill in all required product fields.')
            return
        }

        if (!Number.isFinite(Number(formData.price)) || Number(formData.price) < 0
            || !Number.isFinite(Number(formData.stock)) || Number(formData.stock) < 0) {
            setMessage('Price and stock must be valid non-negative numbers.')
            return
        }

        setIsSubmitting(true)
        setMessage('')

        try {
            let uploadedImages = []
            if (selectedFiles.length) {
                const uploadData = new FormData()
                selectedFiles.forEach((file) => uploadData.append('images', file))

                const uploadResponse = await fetch('/api/uploads', {
                    method: 'POST',
                    body: uploadData
                })
                const uploadResult = await uploadResponse.json()

                if (!uploadResponse.ok) {
                    throw new Error(uploadResult.error || 'Unable to upload product images.')
                }

                uploadedImages = uploadResult.images
            }

            const largestId = productList.reduce((maxId, product) => Math.max(maxId, Number(product.id) || 0), 0)
            const cleanedColors = colors.map((color) => color.trim()).filter(Boolean)
            const cleanedSpecifications = specifications.reduce((result, specification) => {
                const field = specification.field.trim()
                const value = specification.value.trim()

                if (field && value) {
                    result[field] = value
                }

                return result
            }, {})

            const existingImages = getProductImages(productToEdit)
            const product = {
                ...(productToEdit ?? {}),
                id: productToEdit?.id ?? largestId + 1,
                name: (formData.name ?? '').trim(),
                brand: (formData.brand ?? '').trim(),
                category: formData.category ?? '',
                subcategory: (formData.subcategory ?? '').trim(),
                sku: (formData.sku ?? '').trim(),
                price: Number(formData.price),
                originalPrice: Number(formData.originalPrice || formData.price),
                discount: Number(formData.discount || 0),
                rating: productToEdit?.rating ?? 4.5,
                stock: Number(formData.stock),
                image: uploadedImages[0]?.url || existingImages[0] || 'default-product.png',
                images: uploadedImages.length ? uploadedImages.map((image) => image.url) : existingImages,
                status: formData.status ?? 'Active',
                isFeatured: Boolean(formData.isFeatured),
                isNew: Boolean(formData.isNew),
                isBestSeller: Boolean(formData.isBestSeller),
                colors: cleanedColors,
                description: descriptionRef.current
                    ? descriptionRef.current.innerText.replace(/\s+/g, ' ').trim()
                    : formData.description || '',
                specifications: cleanedSpecifications
            }

            if (productToEdit) {
                dispatch(updateProduct(product))
                setMessage('Product updated successfully.')
            } else {
                dispatch(addProduct(product))
                setMessage('Product added successfully.')

                setFormData(emptyFormState)
                setColors([])
                setSpecifications([])
                setSelectedImages([])
                setSelectedFiles([])

                if (descriptionRef.current) {
                    descriptionRef.current.innerHTML = ''
                }
                setDescriptionCount(0)
            }
        } catch (error) {
            setMessage(error instanceof Error
                ? error.message
                : `Unable to ${productToEdit ? 'update' : 'add'} product.`)
        } finally {
            setIsSubmitting(false)
        }
    }

    const cancelForm = () => {
        const nextFormState = getFormState(productToEdit)
        setFormData(nextFormState)
        setColors(productToEdit?.colors ?? [])
        setSpecifications(getProductSpecifications(productToEdit))
        setSelectedImages(getProductImages(productToEdit))
        setSelectedFiles([])
        setMessage('')

        if (descriptionRef.current) {
            descriptionRef.current.innerHTML = nextFormState.description || ''
        }
        setDescriptionCount((nextFormState.description ?? '').trim().length)
    }

    if (productId && !productToEdit) {
        return (
            <main className="w-full p-3 sm:p-5">
                <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                    Product not found.
                </p>
                <Link className="mt-4 inline-block text-sm text-blue-600 hover:underline" to="/admin/products">
                    Back to products
                </Link>
            </main>
        )
    }

    return (
        <main className="w-full p-3 sm:p-5">
            <header className="mb-5">
                <h1 className="text-2xl font-bold tracking-tight text-[#123763] sm:text-[30px]">
                    {productToEdit ? 'Update Product' : 'Add Product'}
                </h1>
                <p className="mt-1 text-sm text-[#6487b8]">
                    {productToEdit
                        ? 'Update the product details below.'
                        : 'Fill in the details below to add a new product to your store.'}
                </p>
            </header>

            <form id="productForm" className="space-y-3" onSubmit={handleSubmit}>
                <input type="hidden" name="productId" value={productId || ''} />
                {message ? (
                    <p role="status" className={`rounded-md p-3 text-sm ${message.includes('successfully.') ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{message}</p>
                ) : null}

                <div className="top-layout product-layout grid grid-cols-1 gap-3 xl:grid-cols-[1fr_1fr]">
                    <section className="panel min-w-0 p-3">
                        <h2 className="section-title mb-3">Product Images</h2>

                        <div className="mb-3 flex flex-wrap items-start gap-2.5">
                            <div className="upload-tile h-[125px] w-[125px] shrink-0 overflow-hidden rounded-md">
                                {selectedImages[0] ? (
                                    <img src={getProductImageUrl(selectedImages[0])} alt="Main product preview" className="h-full w-full object-cover" />
                                ) : (
                                    <div className="text-center">
                                        <div className="text-4xl text-slate-300">▧</div>
                                        <p className="text-[10px] text-slate-400">Product image</p>
                                    </div>
                                )}
                            </div>

                            <div id="imageGallery" className="flex flex-wrap gap-2">
                                <label className="upload-tile h-[76px] w-[68px] cursor-pointer">
                                    <span className="text-2xl text-slate-400">+</span>
                                    <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                                </label>
                                {selectedImages.slice(1).map((image, index) => (
                                    <div key={`${image}-${index}`} className="upload-tile h-[76px] w-[68px] overflow-hidden rounded-md">
                                        <img src={getProductImageUrl(image)} alt="Product preview" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="field-label" htmlFor="name">Product Name <span className="text-red-500">*</span></label>
                                <input
                                    className="field"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="brand">Brand <span className="text-red-500">*</span></label>
                                <input
                                    className="field"
                                    id="brand"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter brand name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div>
                                    <label className="field-label" htmlFor="category">Category <span className="text-red-500">*</span></label>
                                    <select className="field" id="category" name="category" value={formData.category} onChange={handleInputChange} required>
                                        <option value="">Select a category</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Home & Living">Home &amp; Living</option>
                                        <option value="Beauty & Health">Beauty &amp; Health</option>
                                        <option value="Sports & Outdoors">Sports &amp; Outdoors</option>
                                        <option value="Toys & Games">Toys &amp; Games</option>
                                        <option value="Groceries">Groceries</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="field-label" htmlFor="subcategory">Subcategory</label>
                                    <input
                                        className="field"
                                        id="subcategory"
                                        name="subcategory"
                                        value={formData.subcategory}
                                        onChange={handleInputChange}
                                        placeholder="Enter subcategory"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="sku">SKU <span className="text-red-500">*</span></label>
                                <input
                                    className="field"
                                    id="sku"
                                    name="sku"
                                    value={formData.sku}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter SKU"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="panel min-w-0 p-3">
                        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                            <div>
                                <label className="field-label" htmlFor="price">Price <span className="text-red-500">*</span></label>
                                <div className="flex overflow-hidden rounded-md border border-[#cfe3ff]">
                                    <span className="flex items-center bg-[#f7faff] px-3 text-xs text-[#173d70]">$</span>
                                    <input className="field rounded-none border-0" id="price" name="price" type="number" min="0" value={formData.price} onChange={handleInputChange} required />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="originalPrice">Original Price</label>
                                <div className="flex overflow-hidden rounded-md border border-[#cfe3ff]">
                                    <span className="flex items-center bg-[#f7faff] px-3 text-xs text-[#173d70]">$</span>
                                    <input className="field rounded-none border-0" id="originalPrice" name="originalPrice" type="number" min="0" value={formData.originalPrice} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="discount">Discount (%)</label>
                                <input className="field" id="discount" name="discount" type="number" min="0" max="100" value={formData.discount} onChange={handleInputChange} />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="stock">Stock Quantity <span className="text-red-500">*</span></label>
                                <input className="field" id="stock" name="stock" type="number" min="0" value={formData.stock} onChange={handleInputChange} required />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="status">Status <span className="text-red-500">*</span></label>
                                <select className="field" id="status" name="status" value={formData.status} onChange={handleInputChange}>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="InActive">InActive</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            <div>
                                <label className="field-label">Featured Product</label>
                                <label className="flex h-[34px] cursor-pointer items-center gap-2 text-xs text-[#6487b8]">
                                    <input type="checkbox" id="isFeatured" checked={formData.isFeatured} name="isFeatured" onChange={handleInputChange} className="h-4 w-4" />
                                    Mark as featured product
                                </label>
                            </div>

                            <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
                                <label className="flex cursor-pointer items-center gap-2 text-xs text-[#6487b8]">
                                    <input type="checkbox" id="isNew" checked={formData.isNew} name="isNew" onChange={handleInputChange} className="h-4 w-4" />
                                    Is New
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 text-xs text-[#6487b8]">
                                    <input type="checkbox" id="isBestSeller" checked={formData.isBestSeller} name="isBestSeller" onChange={handleInputChange} className="h-4 w-4" />
                                    Is Best Seller
                                </label>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="bottom-layout grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr_1.15fr]">
                    <section className="panel min-w-0 p-3">
                        <h2 className="section-title">Custom Colors</h2>
                        <p className="mb-3 mt-1 text-[11px] muted">
                            Add custom color options for this product.
                        </p>

                        <div id="colorsList" className="flex flex-wrap gap-1.5">
                            {colors.map((color, index) => (
                                <div key={`${color}-${index}`} className="custom-row flex w-full items-center gap-2">
                                    <input
                                        type="text"
                                        value={color}
                                        placeholder="Color name"
                                        onChange={(event) => handleColorChange(index, event.target.value)}
                                    />
                                    <button type="button" className="icon-btn" onClick={() => handleRemoveColor(index)} aria-label="Remove color">
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button type="button" id="addColor" className="mt-3 w-full rounded-md border border-dashed border-[#bcdcff] py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50" onClick={handleAddColor}>
                            ⊕ &nbsp; Add Color
                        </button>
                    </section>

                    <section className="panel min-w-0 p-3">
                        <h2 className="section-title">Custom Specifications</h2>
                        <p className="mb-3 mt-1 text-[11px] muted">
                            Add product specifications as custom fields.
                        </p>

                        <div className="mb-1 grid grid-cols-[12px_minmax(0,1fr)_minmax(0,1.5fr)_16px] gap-2 text-[10px] font-semibold text-[#7795bc]">
                            <span></span>
                            <span>Field</span>
                            <span>Value</span>
                            <span></span>
                        </div>

                        <div id="specificationsList" className="space-y-1.5">
                            {specifications.map((specification) => (
                                <div key={specification.id} className="custom-row grid grid-cols-[12px_minmax(0,1fr)_minmax(0,1.5fr)_16px] gap-2">
                                    <span className="text-center text-[#aac0dc]">•</span>
                                    <input
                                        type="text"
                                        value={specification.field}
                                        placeholder="Field"
                                        onChange={(event) => handleSpecificationChange(specification.id, 'field', event.target.value)}
                                    />
                                    <input
                                        type="text"
                                        value={specification.value}
                                        placeholder="Value"
                                        onChange={(event) => handleSpecificationChange(specification.id, 'value', event.target.value)}
                                    />
                                    <button type="button" className="icon-btn" onClick={() => handleRemoveSpecification(specification.id)} aria-label="Remove specification">
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button type="button" id="addSpecification" className="mt-3 w-full rounded-md border border-dashed border-[#bcdcff] py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50" onClick={handleAddSpecification}>
                            + &nbsp; Add Specification
                        </button>
                    </section>

                    <section className="panel min-w-0 p-3">
                        <h2 className="section-title mb-3">Product Description</h2>

                        <div className="overflow-hidden rounded-md border border-[#cfe3ff]">
                            <div className="flex flex-wrap items-center gap-1 border-b border-[#dceaff] bg-[#f9fbff] p-2">
                                <button type="button" className="format-btn px-1.5 font-bold" title="Bold" onMouseDown={(event) => event.preventDefault()} onClick={() => handleFormat('bold')}>B</button>
                                <button type="button" className="format-btn px-1.5 italic" title="Italic" onMouseDown={(event) => event.preventDefault()} onClick={() => handleFormat('italic')}>I</button>
                                <button type="button" className="format-btn px-1.5 underline" title="Underline" onMouseDown={(event) => event.preventDefault()} onClick={() => handleFormat('underline')}>U</button>
                            </div>

                            <div
                                ref={descriptionRef}
                                contentEditable="true"
                                suppressContentEditableWarning
                                className="min-h-[140px] p-3 text-xs leading-5 text-[#173d70] outline-none"
                                data-placeholder="Enter detailed product description..."
                                onInput={handleDescriptionChange}
                                dangerouslySetInnerHTML={{ __html: formData.description }}
                            />
                        </div>
                        <p className="mt-1 text-right text-[10px] muted">
                            <span id="descriptionCount">{descriptionCount}</span>/1000
                        </p>
                    </section>
                </div>

                <div className="panel flex flex-wrap items-center justify-between gap-3 p-3">
                    <button type="button" id="cancelButton" className="rounded-md border border-[#cfe3ff] px-5 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50" onClick={cancelForm}>
                        Cancel
                    </button>

                    <button type="submit" disabled={isSubmitting} className="rounded-md bg-[#087bff] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60">
                        <span className="mr-1 text-base">{productToEdit ? '✓' : '+'}</span>
                        {isSubmitting
                            ? (selectedFiles.length ? 'Uploading...' : 'Saving...')
                            : (productToEdit ? 'Update Product' : 'Add Product')}
                    </button>
                </div>


            </form>
        </main>
    )
}

const AddProduct = () => {
    const productList = useSelector((state) => state.productList.value)
    const { productId } = useParams()
    const productToEdit = productId
        ? productList.find((product) => String(product.id) === String(productId))
        : undefined

    return (
        <ProductForm
            key={productId ?? 'new'}
            productId={productId}
            productToEdit={productToEdit}
            productList={productList}
        />
    )
}

export default AddProduct