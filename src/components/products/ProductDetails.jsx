import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {
    FaCartShopping,
    FaChevronRight,
    FaCircleCheck,
    FaHeadset,
    FaHeart,
    FaHouse,
    FaLock,
    FaMinus,
    FaPlus,
    FaRotateLeft,
    FaShieldHalved,
    FaStar,
    FaStore,
    FaTruckFast,
} from 'react-icons/fa6'

const productImages = import.meta.glob('../../assets/images/*', {
    eager: true,
    query: '?url',
    import: 'default',
})

const colorSwatches = {
    Silver: '#cbd5e1',
    Black: '#23272b',
    Blue: '#3265b3',
    Orange: '#f97316',
    White: '#ffffff',
    'Rose Gold': '#d9a1a1',
    Brown: '#8b5e3c',
    Pink: '#ec8bb5',
    Green: '#5d8b65',
    Grey: '#9ca3af',
}

const formatPrice = (price) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
}).format(price)

const getImageUrl = (imageName) => productImages[`../../assets/images/${imageName}`]

const ProductDetailsContent = ({ product, products }) => {
    const [activeTab, setActiveTab] = useState('Description')
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '')
    const [selectedVariant, setSelectedVariant] = useState(product?.storage?.[0] || product?.sizes?.[0] || '')
    const [selectedImage, setSelectedImage] = useState(product?.image || '')
    const [isWishlisted, setIsWishlisted] = useState(false)

    const availableImages = product.images?.length ? product.images : [product.image]
    const imageUrl = getImageUrl(selectedImage)
    const variants = product.storage?.length ? product.storage : product.sizes || []
    const variantLabel = product.storage?.length ? 'Storage' : 'Size'
   
    
    const specifications = Object.entries(product.specifications || {})

    return (
        <div className="pb-10">
            <section className="grid gap-7 py-6 lg:grid-cols-[1.02fr_1.08fr]">
                <div className="grid grid-cols-[58px_minmax(0,1fr)] gap-3 sm:grid-cols-[68px_minmax(0,1fr)] sm:gap-4">
                    <div className="flex flex-col gap-3">
                        {availableImages.map((image, index) => (
                            <button
                                aria-label={`Show product image ${index + 1}`}
                                aria-pressed={selectedImage === image}
                                className={`aspect-square overflow-hidden rounded-lg border-2 bg-white p-1.5 ${selectedImage === image ? 'border-blue-500' : 'border-blue-100'}`}
                                key={`${image}-${index}`}
                                onClick={() => setSelectedImage(image)}
                                type="button"
                            >
                                <img alt="" className="h-full w-full object-contain" src={getImageUrl(image)} />
                            </button>
                        ))}
                    </div>

                    <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-[#f2faff] sm:min-h-[480px]">
                        <span className="absolute left-0 top-0 rounded-br-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                            {product.discount}% OFF
                        </span>
                        <button
                            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                            aria-pressed={isWishlisted}
                            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-blue-100 bg-white text-xl text-[#123e70]"
                            onClick={() => setIsWishlisted(value => !value)}
                            type="button"
                        >
                            <FaHeart className={isWishlisted ? 'text-rose-500' : ''} />
                        </button>
                        <img
                            alt={product.name}
                            className="h-[min(400px,70vw)] w-[78%] max-w-[450px] object-contain mix-blend-multiply"
                            src={imageUrl}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-sm text-[#5a79a0]">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> {product.brand}
                    </div>
                    <h1 className="mt-1 text-2xl font-extrabold leading-tight text-[#092f5d] sm:text-3xl">{product.name}</h1>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span aria-label={`${product.rating} out of 5 stars`} className="flex text-lg text-amber-400">
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar className={index < Math.round(product.rating) ? '' : 'text-slate-200'} key={index} />
                            ))}
                        </span>
                        <span className="font-semibold text-[#123d70]">{product.rating}</span>
                        <a className="text-sm text-blue-600" href="#reviews">({product.reviewCount} reviews)</a>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                        <span className="text-2xl font-extrabold text-blue-600 sm:text-3xl">{formatPrice(product.price)}</span>
                        <del className="text-lg text-slate-400">{formatPrice(product.originalPrice)}</del>
                        <span className="rounded-full bg-rose-500 px-2.5 py-1 text-xs font-bold text-white">Save {product.discount}%</span>
                    </div>

                    <div className={`mt-3 flex items-center gap-2 text-sm font-semibold ${product.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        <FaCircleCheck /> {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                    </div>

                    {product.colors?.length > 0 && (
                        <fieldset className="mt-4">
                            <legend className="text-sm font-bold text-[#0b315e]">Color: <span className="font-medium text-slate-500">{selectedColor}</span></legend>
                            <div className="mt-2 flex flex-wrap gap-3">
                                {product.colors.map(color => (
                                    <button
                                        aria-label={color}
                                        aria-pressed={selectedColor === color}
                                        className={`h-9 w-9 rounded-full border-2 ${selectedColor === color ? 'border-blue-500 ring-2 ring-blue-100' : 'border-white shadow'}`}
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: colorSwatches[color] || '#cbd5e1' }}
                                        type="button"
                                    />
                                ))}
                            </div>
                        </fieldset>
                    )}

                    {variants.length > 0 && (
                        <fieldset className="mt-5">
                            <legend className="text-sm font-bold text-[#0b315e]">{variantLabel}:</legend>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {variants.map(variant => (
                                    <button
                                        aria-pressed={selectedVariant === variant}
                                        className={`rounded-lg border px-4 py-2 text-xs ${selectedVariant === variant ? 'border-blue-500 bg-blue-50 text-[#164a83]' : 'border-blue-100 text-[#365777]'}`}
                                        key={variant}
                                        onClick={() => setSelectedVariant(variant)}
                                        type="button"
                                    >
                                        {variant}
                                    </button>
                                ))}
                            </div>
                        </fieldset>
                    )}

                    <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-10 items-center rounded-lg border border-blue-100">
                            <button aria-label="Decrease quantity" className="grid h-9 w-9 place-items-center text-blue-600" disabled={quantity <= 1} onClick={() => setQuantity(value => Math.max(1, value - 1))} type="button"><FaMinus className="text-xs" /></button>
                            <span aria-live="polite" className="min-w-8 text-center text-sm font-semibold">{quantity}</span>
                            <button aria-label="Increase quantity" className="grid h-9 w-9 place-items-center text-blue-600" disabled={quantity >= product.stock} onClick={() => setQuantity(value => Math.min(product.stock, value + 1))} type="button"><FaPlus className="text-xs" /></button>
                        </div>
                        <span className="text-xs text-slate-500">Quantity</span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <button className="flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400" disabled={product.stock <= 0} type="button">
                            <FaCartShopping /> Add to Cart
                        </button>
                        <button
                            className={`flex h-12 items-center justify-center gap-2 rounded-lg border font-semibold transition ${isWishlisted ? 'border-rose-300 bg-rose-50 text-rose-600' : 'border-blue-500 text-blue-600 hover:bg-blue-50'}`}
                            onClick={() => setIsWishlisted(value => !value)}
                            type="button"
                        >
                            <FaHeart /> {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </section>

            <section className="mt-6">
                <div aria-label="Product information" className="flex gap-6 overflow-x-auto border-b border-blue-100 sm:gap-8">
                    {['Description', 'Specifications', 'Reviews'].map(tab => (
                        <button
                            aria-current={activeTab === tab ? 'page' : undefined}
                            className={`relative shrink-0 py-3 text-sm ${activeTab === tab ? 'font-bold text-blue-600' : 'text-[#163d6c]'}`}
                            id={tab === 'Reviews' ? 'reviews' : undefined}
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            type="button"
                        >
                            {tab}
                            {activeTab === tab && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-600" />}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 py-5 lg:grid-cols-[1.7fr_.9fr]">
                    <div>
                        {activeTab === 'Description' && (
                            <>
                                <h2 className="text-lg font-bold text-[#092f5d]">About this item</h2>
                                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#52739b]">{product.description}</p>
                                {specifications.length > 0 && (
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#41668f]">
                                        {specifications.slice(0, 5).map(([label, value]) => <li key={label}>{label}: {String(value)}</li>)}
                                    </ul>
                                )}
                            </>
                        )}
                        {activeTab === 'Specifications' && (
                            <>
                                <h2 className="text-lg font-bold text-[#092f5d]">Specifications</h2>
                                <dl className="mt-3 divide-y divide-blue-100 text-sm">
                                    {specifications.map(([label, value]) => (
                                        <div className="grid grid-cols-[minmax(110px,.7fr)_1.3fr] gap-4 py-2" key={label}>
                                            <dt className="font-medium capitalize text-[#41668f]">{label.replace(/([A-Z])/g, ' $1')}</dt>
                                            <dd className="text-[#52739b]">{String(value)}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </>
                        )}
                        {activeTab === 'Reviews' && (
                            <div>
                                <h2 className="text-lg font-bold text-[#092f5d]">Customer reviews</h2>
                                <div className="mt-3 flex flex-wrap items-center gap-3">
                                    <span className="text-3xl font-extrabold text-[#092f5d]">{product.rating}</span>
                                    <span className="flex text-amber-400">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</span>
                                    <span className="text-sm text-[#6688ad]">Based on {product.reviewCount} reviews</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="rounded-xl bg-[#eef9ff] p-6 sm:p-7">
                        <FaStore className="text-4xl text-blue-600" />
                        <h2 className="mt-3 text-xl font-extrabold text-[#092f5d]">{product.brand}</h2>
                        <p className="text-sm font-medium text-[#0c386a]">Quality you can count on</p>
                        <p className="mt-3 text-sm leading-6 text-[#5c7da4]">Explore more products from {product.brand} and find the right fit for you.</p>
                        <Link className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600" to="/products">Visit Shop <FaChevronRight /></Link>
                    </aside>
                </div>
            </section>
        </div>
    )
}

const ProductDetails = () => {
    const { productId } = useParams()
    const products = useSelector(state => state.productList.value)
    const product = products.find(eachProduct => eachProduct.id === Number(productId))

    if (!product) {
        return (
            <section className="py-20 text-center">
                <h1 className="text-2xl font-bold text-[#092f5d]">Product not found</h1>
                <Link className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-600" to="/products">
                    <FaChevronRight className="rotate-180" /> Back to shop
                </Link>
            </section>
        )
    }

    return <ProductDetailsContent key={product.id} product={product} products={products} />
}

export default ProductDetails