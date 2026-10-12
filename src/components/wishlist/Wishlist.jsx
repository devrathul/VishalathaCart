import { useSelector } from 'react-redux'
import ProductCard from '../products/ProductCard'

const Wishlist = () => {
    const products = useSelector(state => state.productList.value)
    const wishlistIds = useSelector(state => state.wishlists.value)
    const wishlistedProducts = products.filter(product => wishlistIds.includes(product.id))

    return (
        <section className="py-10">
            <h1 className="mb-6 text-2xl font-bold text-[#092f5d]">My Wishlist</h1>
            {wishlistedProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4">
                    {wishlistedProducts.map(product => (
                        <ProductCard key={product.id} products={product} showRemoveAction />
                    ))}
                </div>
            ) : (
                <p className="rounded-xl border border-blue-100 bg-white py-12 text-center text-sm text-slate-500">
                    Your wishlist is empty. Add products using the heart button.
                </p>
            )}
        </section>
    )
}

export default Wishlist