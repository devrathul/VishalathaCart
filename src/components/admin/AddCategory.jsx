import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { RiImageUploadLine, RiResetLeftLine } from 'react-icons/ri'
import { addCategory, editCategory } from '../../features/categories/categoriesSlice'

const emptyFormState = {
    categoryName: '',
    description: '',
    status: 'Active'
}

const categoryImageAssets = import.meta.glob('../../assets/images/**/*', {
    eager: true,
    query: '?url',
    import: 'default'
})

const supportedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const maximumImageSize = 5 * 1024 * 1024

const getCategoryImageUrl = (image) => image?.startsWith('/')
    ? image
    : categoryImageAssets[`../../assets/images/category/${image}`]
        || categoryImageAssets[`../../assets/images/${image}`]
        || image

const CategoryForm = ({ categoryToEdit, categories }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(() => ({
        ...emptyFormState,
        ...(categoryToEdit ?? {})
    }))
    const [selectedImage, setSelectedImage] = useState(() => getCategoryImageUrl(categoryToEdit?.image) || '')
    const [selectedFile, setSelectedFile] = useState(null)
    const [descriptionCount, setDescriptionCount] = useState(categoryToEdit?.description?.length ?? 0)
    const [feedback, setFeedback] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((previous) => ({ ...previous, [name]: value }))
        setFeedback(null)
    }

    const handleImageUpload = (event) => {
        const input = event.currentTarget
        const file = input.files?.[0]
        input.value = ''

        if (!file) return

        if (!supportedImageTypes.includes(file.type)) {
            setFeedback({ type: 'error', text: 'Choose a JPEG, PNG, WebP, or GIF image.' })
            return
        }

        if (file.size > maximumImageSize) {
            setFeedback({ type: 'error', text: 'The category image must be 5 MB or smaller.' })
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            if (typeof reader.result !== 'string') {
                setFeedback({ type: 'error', text: 'Unable to preview the selected image.' })
                return
            }

            setSelectedImage(reader.result)
            setSelectedFile(file)
            setFeedback(null)
        }
        reader.onerror = () => {
            setFeedback({ type: 'error', text: 'Unable to read the selected image.' })
        }
        reader.readAsDataURL(file)
    }

    const handleRemoveImage = () => {
        setSelectedImage('')
        setSelectedFile(null)
        setFeedback(null)
    }

    const handleDescriptionChange = (event) => {
        const description = event.target.value
        setFormData((previous) => ({ ...previous, description }))
        setDescriptionCount(description.length)
        setFeedback(null)
    }

    const handleReset = () => {
        setFormData({ ...emptyFormState, ...(categoryToEdit ?? {}) })
        setSelectedImage(getCategoryImageUrl(categoryToEdit?.image) || '')
        setSelectedFile(null)
        setDescriptionCount(categoryToEdit?.description?.length ?? 0)
        setFeedback(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isSubmitting) return

        const categoryName = formData.categoryName.trim()
        const description = formData.description.trim()

        if (!categoryName || !description || !formData.status || (!selectedFile && !selectedImage)) {
            setFeedback({
                type: 'error',
                text: 'Please provide a category name, status, image, and description.'
            })
            return
        }

        if (categories.some((category) => (
            String(category.id) !== String(categoryToEdit?.id)
            && category.categoryName.trim().toLowerCase() === categoryName.toLowerCase()
        ))) {
            setFeedback({ type: 'error', text: 'A category with this name already exists.' })
            return
        }

        setIsSubmitting(true)
        setFeedback(null)

        try {
            let imageUrl = categoryToEdit?.image
            if (selectedFile) {
                const uploadData = new FormData()
                uploadData.append('images', selectedFile)

                const uploadResponse = await fetch('/api/uploads/categories', {
                    method: 'POST',
                    body: uploadData
                })
                const uploadResult = await uploadResponse.json()

                if (!uploadResponse.ok) {
                    throw new Error(uploadResult.error || 'Unable to upload the category image.')
                }

                imageUrl = uploadResult.images?.[0]?.url
                if (typeof imageUrl !== 'string' || !imageUrl) {
                    throw new Error('The image upload did not return a usable image.')
                }
            }

            const updatedCategory = {
                ...(categoryToEdit ?? {}),
                id: categoryToEdit?.id ?? categories.reduce(
                    (maxId, category) => Math.max(maxId, Number(category.id) || 0),
                    0
                ) + 1,
                categoryName,
                image: imageUrl,
                description,
                status: formData.status
            }

            if (categoryToEdit) {
                dispatch(editCategory(updatedCategory))
                setSelectedImage(imageUrl)
                setSelectedFile(null)
                setFeedback({ type: 'success', text: 'Category updated successfully.' })
            } else {
                dispatch(addCategory(updatedCategory))
                setFormData(emptyFormState)
                setSelectedImage('')
                setSelectedFile(null)
                setDescriptionCount(0)
                setFeedback({ type: 'success', text: 'Category added successfully.' })
            }
        } catch (error) {
            setFeedback({
                type: 'error',
                text: error instanceof Error
                    ? error.message
                    : `Unable to ${categoryToEdit ? 'update' : 'add'} the category.`
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {categoryToEdit ? 'Update Category' : 'Add Category'}
                    </h1>
                    <p className="mt-2 text-sm text-blue-500">
                        {categoryToEdit
                            ? 'Update the category details below.'
                            : 'Create a new category for your store catalog.'}
                    </p>
                </div>

                <Link
                    to="/admin/categories"
                    className="rounded-lg border border-blue-200 px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                    ← Back to Categories
                </Link>
            </div>

            <section className="rounded-xl border border-blue-100 bg-white p-5 sm:p-7">
                <div className="mb-6 border-b border-blue-100 pb-4">
                    <h2 className="text-lg font-semibold">Category Information</h2>
                    <p className="mt-1 text-sm text-slate-500">Enter the category details below.</p>
                </div>

                <form id="categoryForm" className="space-y-6" onSubmit={handleSubmit}>
                    {feedback && (
                        <p
                            role={feedback.type === 'error' ? 'alert' : 'status'}
                            className={`rounded-lg p-3 text-sm ${feedback.type === 'success'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-red-50 text-red-700'}`}
                        >
                            {feedback.text}
                        </p>
                    )}

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                            <label htmlFor="categoryName" className="mb-2 block text-sm font-medium">
                                Category Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="categoryName"
                                name="categoryName"
                                value={formData.categoryName}
                                placeholder="e.g. Electronics"
                                onChange={handleInputChange}
                                maxLength={100}
                                required
                                className="w-full rounded-lg border border-blue-100 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="status" className="mb-2 block text-sm font-medium">
                                Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="status"
                                name="status"
                                onChange={handleInputChange}
                                value={formData.status}
                                required
                                className="w-full rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="categoryImage" className="mb-2 block text-sm font-medium">
                            Category Image {!selectedImage && <span className="text-red-500">*</span>}
                        </label>

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                            {selectedImage && (
                                <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-xl border border-blue-100 bg-blue-50">
                                    <img
                                        src={selectedImage}
                                        alt="Category preview"
                                        className="h-full w-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Remove category image"
                                        onClick={handleRemoveImage}
                                        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-lg text-white shadow transition hover:bg-red-600"
                                    >
                                        &times;
                                    </button>
                                </div>
                            )}

                            <label
                                htmlFor="categoryImage"
                                className="flex min-h-44 w-44 flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-300 px-5 py-8 text-center transition hover:bg-blue-50"
                            >
                                <RiImageUploadLine size={25} />
                                <span className="text-sm font-medium text-blue-600">
                                    Click to upload category image
                                </span>
                                <span className="mt-2 text-xs text-slate-400">
                                    JPEG, PNG, WebP, or GIF (one image, up to 5 MB)
                                </span>
                            </label>

                            <input
                                type="file"
                                id="categoryImage"
                                name="image"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </div>

                        <p className="mt-2 text-xs text-slate-500">
                            {selectedFile?.name ?? (selectedImage ? 'Current category image.' : 'No image selected.')}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            Recommended: square image, such as 500 × 500 pixels.
                        </p>
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label htmlFor="description" className="text-sm font-medium">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <span className="text-xs text-slate-400">{descriptionCount}/500</span>
                        </div>

                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            maxLength={500}
                            value={formData.description}
                            onChange={handleDescriptionChange}
                            placeholder="Describe the products included in this category..."
                            required
                            className="w-full resize-y rounded-lg border border-blue-100 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="flex flex-wrap justify-end gap-3 border-t border-blue-100 pt-5">
                        <button
                            type="button"
                            onClick={handleReset}
                            disabled={isSubmitting}
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-blue-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <RiResetLeftLine size={20} />
                            Reset
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <MdOutlineSaveAlt size={20} />
                            {isSubmitting
                                ? (selectedFile ? 'Uploading...' : 'Saving...')
                                : (categoryToEdit ? 'Update Category' : 'Save Category')}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

const AddCategory = () => {
    const categories = useSelector((state) => state.categories.value)
    const { categoryId } = useParams()
    const categoryToEdit = categoryId
        ? categories.find((category) => String(category.id) === String(categoryId))
        : undefined

    if (categoryId && !categoryToEdit) {
        return (
            <main className="w-full p-3 sm:p-5">
                <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                    Category not found.
                </p>
                <Link className="mt-4 inline-block text-sm text-blue-600 hover:underline" to="/admin/categories">
                    Back to categories
                </Link>
            </main>
        )
    }

    return (
        <CategoryForm
            key={categoryId ?? 'new'}
            categoryToEdit={categoryToEdit}
            categories={categories}
        />
    )
}

export default AddCategory
