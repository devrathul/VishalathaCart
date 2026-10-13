import { Link, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { FaHeart } from "react-icons/fa6"
import { removeFromWishList, toggleWishlist } from "../../features/wishlist/wishlistSlice"
import { addToCart } from "../../features/cart/cartSlice"
import Rating from "../common/Rating"
import Cookies from 'js-cookie'


const productImages = import.meta.glob('../../assets/images/**/*', {
    eager: true,
    query: '?url',
    import: 'default',
})

const ProductCard = ({ products, showRemoveAction = false }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const wishlistIds = useSelector(state => state.wishlists.value)
    const isWishlisted = wishlistIds.includes(products.id)
    const imageUrl = products.image?.startsWith('/')
        ? products.image
        : productImages[`../../assets/images/${products.image}`]

    const isLoggedIn = Cookies.get('loginProfile') ? true : false


    const handleWishlistClick = () => {
        if (isLoggedIn) {
            dispatch(toggleWishlist(products.id))
        } else {
            navigate('/login')
        }
    }

    const handleAddToCart = () => {
        if (isLoggedIn) {
            dispatch(addToCart(products))
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
            <div className="relative flex flex-col items-center justify-center gap-3">
                <div className="flex h-75 w-full flex-col items-center justify-center rounded-xl bg-gradient-to-b from-white to-slate-50">
                    <div className="flex w-full justify-between px-2">
                        <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            {products.discount}% OFF
                        </span>
                        <button
                            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                            aria-pressed={isWishlisted}
                            className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow-sm ${isWishlisted ? 'text-rose-500' : 'text-[#092b62]'}`}
                            onClick={handleWishlistClick}
                            type="button"
                        >
                            <FaHeart />
                        </button>
                    </div>
                    <Link to={`/product/${products.id}`} className="flex flex-col items-center gap-3">
                        <img
                            src={imageUrl}
                            alt={products.name}
                            className="h-45 w-45 object-contain"
                        />
                        <h3 className="text-lg font-bold text-[#092b62]">
                            {products.name}
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="px-2 pt-3">
                <div className="flex items-center gap-2">
                    <Rating rating={products.rating} />
                    <span className="text-sm text-slate-500">
                        ({products.rating})
                    </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-[21px] font-bold text-blue-600">
                        ₹{products.price}
                    </span>
                    <span className="text-base text-slate-400 line-through">
                        ₹{products.originalPrice}
                    </span>
                </div>
                <button
                    className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={products.stock <= 0}
                    onClick={handleAddToCart}
                    type="button"
                >
                    <span className="text-xl">🛒</span>
                    Add to Cart
                </button>
                {showRemoveAction && (
                    <button
                        className="mt-2 w-full rounded-lg border border-rose-200 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 cusror-pointer"
                        onClick={() => dispatch(removeFromWishList(products.id))}
                        type="button"
                    >
                        Remove from wishlist
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductCard