import Cookies from 'js-cookie'
import { Link } from 'react-router'
import { useSelector } from "react-redux"



const ViewOrder = () => {

    const isLoggedIn = Cookies.get('loginProfile') ? true : false
    const user = useSelector(state => state.auth.user)
    const orderlist = useSelector((state) => state.orders.value)

    const activeUserOrderList = orderlist.filter(orderItem => orderItem.customerId == user.id)

    const renderEmptyOrder = () => (
        <div id="empty-cart" className="text-center py-14 px-4">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-bold">Your order is empty</h3>
            <p className="text-sm text-gray-500 mt-2">Add products to start shopping.</p>
            <Link to="/products" className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">Continue Shopping</Link>
        </div>
    )

    const renderOrderList = () => (
        <div className="py-14 px-4">
            {activeUserOrderList.map(order => (
                <article data-search="VC20261002-00123 iphone 17 pro delivered" className="order-card grid gap-4 rounded-xl border border-blue-100 bg-white/90 p-4 shadow-soft transition hover:border-blue-200 md:grid-cols-[1.05fr_1.35fr_1fr_0.75fr_auto] md:items-center" key={order.id}>
                    <div>
                        <h2 className="text-sm font-bold">Order #{order.id}</h2>
                        <p className="mt-2 text-xs text-slate-500">▦ &nbsp;{order.orderDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-17 w-15.5 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 p-1">
                            <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=160&q=80" alt="iPhone 17 Pro" className="h-full w-full rounded object-contain" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">iPhone 17 Pro</p><p className="mt-1 text-xs text-slate-500">Silver | 128GB</p>
                            <p className="mt-1 text-sm font-bold">₹1,24,900</p><p className="text-xs text-slate-500">Qty: 1</p>
                        </div>
                    </div>
                    <div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">▰
                            Delivered
                        </span>
                        <p className="mt-2 text-xs text-slate-500">Delivered on</p><p className="mt-1 text-xs font-medium">
                            05 Oct 2026, 02:30 PM
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-500">Total Amount</p>
                        <p className="mt-1 text-lg font-extrabold">₹1,24,900</p>
                    </div>
                </article>
            ))}
        </div>
    )

    return (
        <section className="py-10">
            <h1 className="mb-6 text-2xl font-bold text-[#092f5d]">My Orders</h1>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 items-start">
                {isLoggedIn ? (
                    <div className="lg:col-span-2 border border-blue-100 rounded-xl overflow-hidden bg-white">
                        {activeUserOrderList.length === 0 ? renderEmptyOrder() : renderOrderList()}
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

export default ViewOrder