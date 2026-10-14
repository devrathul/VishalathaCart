import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, removeAllFromCart, addQuantity, minusQuantity } from '../../features/cart/cartSlice'
import { Link } from 'react-router'
import Cookies from 'js-cookie'
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const productImages = import.meta.glob('../../assets/images/**/*', {
    eager: true,
    query: '?url',
    import: 'default',
})

const ViewCart = () => {

    const dispatch = useDispatch()
    const viewcartItems = useSelector((state) => state.carts.value)
    const products = useSelector((state) => state.productList.value)
    const cartList = viewcartItems.map((cartItem) => {
        const product = products.find((item) => item.id === cartItem.productID)

        if (!product) {
            return null
        }

        return {
            ...product,
            quantity: cartItem.quantity ?? 1,
            cartID: cartItem.cartID ?? cartItem.productID,
            productID: cartItem.productID,
            customerID: cartItem.customerID,
        }
    })
        .filter(Boolean)
    const isLoggedIn = Cookies.get('loginProfile') ? true : false

    const renderCartList = () => (
        <>
            <div className="flex items-center justify-between gap-3 p-4 border-b border-blue-100">               
                <button id="remove-selected" onClick={() => dispatch(removeAllFromCart())}
                    className="cursor-pointer flex gap-4 text-xs font-semibold text-blue-700 hover:text-red-500">
                    <MdOutlineRemoveShoppingCart size={24} /> Remove All
                </button>
            </div>
            <div id="cart-items" className="px-4">
                {cartList.map((cartitem) => {
                    const imageUrl = cartitem.image?.startsWith('/')
                        ? cartitem.image
                        : productImages[`../../assets/images/${cartitem.image}`]

                    return (
                        <article className="cart-item grid grid-cols-2 sm:grid-cols-[150px_minmax(0,1fr)_96px] gap-3 sm:gap-4 items-center py-5 border-b border-blue-100"
                            data-price="999" data-id="1" key={cartitem.cartID}>
                            <img src={imageUrl}
                                alt={cartitem.name}
                                className="w-20 h-24 object-fit rounded-lg bg-gray-50" />
                            <div className="min-w-0">
                                <p className="text-xs text-gray-400">{cartitem.subcategory}</p>
                                <h3 className="text-sm font-medium mt-1">{cartitem.name}</h3>

                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="text-lg font-bold">₹{cartitem.price}</span>
                                    <span className="text-xs text-gray-400 line-through">₹{cartitem.originalPrice}</span>
                                    <span className="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">{cartitem.discount}% OFF</span>
                                </div>
                                <span className="inline-block mt-2 text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                                    ● In Stock
                                </span>
                            </div>
                            <div className="col-span-2 sm:col-span-1 flex sm:flex-col items-center justify-between gap-3">
                                <div className="flex items-center border border-blue-200 rounded-lg overflow-hidden">
                                    <button className="cursor-pointer quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="minus" aria-label="Decrease quantity" disabled={cartitem.quantity <= 1} onClick={() => dispatch(minusQuantity(cartitem.cartID))}>−</button>
                                    <span className="quantity w-8 text-center text-sm">{cartitem.quantity}</span>
                                    <button className="cursor-pointer quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="plus" aria-label="Increase quantity"
                                        onClick={() => dispatch(addQuantity(cartitem.cartID))}>+</button>
                                </div>

                                <span className="line-total font-bold">₹{cartitem.price * cartitem.quantity}</span>

                                <button className="cursor-pointer flex gap-4 remove-item text-xs text-gray-500 hover:text-red-500" onClick={() => dispatch(removeFromCart(cartitem.productID))}><MdOutlineRemoveShoppingCart size={24} /> Remove</button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>
    )

    const renderEmptyCart = () => (
        <div id="empty-cart" className="text-center py-14 px-4">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-bold">Your cart is empty</h3>
            <p className="text-sm text-gray-500 mt-2">Add products to start shopping.</p>
            <Link to="/products" className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">Continue Shopping</Link>
        </div>
    )

    return (
        <section className="py-10">
            <h1 className="mb-6 text-2xl font-bold text-[#092f5d]">My Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 items-start">
                {isLoggedIn ? (
                    <div className="lg:col-span-2 border border-blue-100 rounded-xl overflow-hidden bg-white">
                        {cartList.length === 0 ? renderEmptyCart() : renderCartList()}
                    </div>
                ) : (
                    <div className="rounded-xl border border-blue-100 bg-white py-12 text-center">
                        <p className=' text-lg text-slate-500 my-5'>Your cart is empty</p>
                        <div className='flex gap-5 justify-center'>
                            <Link className='rounded-full bg-[#0b2648] text-white px-5 py-2 text-sm' to="/login">Sign In Now</Link>
                            <Link className='rounded-full bg-[#0b2648] text-white px-5 py-2 text-sm' to="/signup">Sign Up Now</Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ViewCart