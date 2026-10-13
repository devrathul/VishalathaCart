import { useSelector } from 'react-redux'
import ProductCard from '../products/ProductCard'
import Cookies from 'js-cookie'
import { Link } from 'react-router'

const Wishlist = () => {
    const products = useSelector(state => state.productList.value)
    const wishlistIds = useSelector(state => state.wishlists.value)
    const wishlistedProducts = products.filter(product => wishlistIds.includes(product.id))
    const isLoggedIn = Cookies.get('loginProfile') ? true : false

    return (
        <section className="py-10">
            <h1 className="mb-6 text-2xl font-bold text-[#092f5d]">My Wishlist</h1>
            {isLoggedIn ? (
                wishlistedProducts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4">
                        {wishlistedProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                products={product}
                                showRemoveAction
                            />
                        ))}
                    </div>
                ) : (
                    <p className="rounded-xl border border-blue-100 bg-white py-12 text-center text-sm text-slate-500">
                        Your wishlist is empty. Add products using the heart button.
                    </p>
                )
            ) : (
                <div className="rounded-xl border border-blue-100 bg-white py-12 text-center">
                    <p className=' text-lg text-slate-500 my-5'>Your wishlist is empty</p>
                    <div className='flex gap-5 justify-center'>
                        <Link className='rounded-full bg-[#0b2648] text-white px-5 py-2 text-sm' to="/login">Sign In Now</Link>
                        <Link className='rounded-full bg-[#0b2648] text-white px-5 py-2 text-sm' to="/signup">Sign Up Now</Link>
                    </div>
                </div>
            )}


        </section>
    )
}

export default Wishlist