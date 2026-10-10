import { Link } from 'react-router'
import { AiOutlineProduct, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import footerlogo from '/images/logo-footer.png'

const AdminHeader = () => {
    return (
        <aside className="bg-[#0b2648] text-white flex w-[252px] min-w-[252px] flex-col text-white">

            <div className="brand flex h-[68px] items-center gap-3 border-b border-white/10 px-6">
                <div>
                    <img className='w-72' src={footerlogo} title="Vishalatha Cart | Shopping Assistant" alt="Vishalatha Cart | Shopping Assistant" />
                </div>
            </div>

            <nav className="nav-menu flex-1 space-y-1 px-3.5 py-4">
                <Link to="/admin/products" className="nav-link flex items-center gap-5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-[14px] font-medium shadow-lg shadow-blue-950/20">
                    <AiOutlineProduct className="h-5.5 w-5.5 shrink-0" />
                    <span className="nav-label">Products</span>
                </Link>

                <Link to="/admin/categories" className="nav-link flex items-center gap-5 rounded-lg px-4 py-3 text-[14px] text-slate-200 hover:bg-white/10">
                    <BiCategory className="h-5.5 w-5.5 shrink-0" />
                    <span className="nav-label">Categories</span>
                </Link>

                <Link to="/admin/orders" className="nav-link flex items-center gap-5 rounded-lg px-4 py-3 text-[14px] text-slate-200 hover:bg-white/10">
                    <AiOutlineShoppingCart className="h-5.5 w-5.5 shrink-0" />
                    <span className="nav-label">Orders</span>
                </Link>

                <Link to="/admin/customers" className="nav-link flex items-center gap-5 rounded-lg px-4 py-3 text-[14px] text-slate-200 hover:bg-white/10">
                    <IoPersonOutline className="h-5.5 w-5.5 shrink-0" />
                    <span className="nav-label">Customers</span>
                </Link>
            </nav>

            <div className="logout-area mx-5 flex items-center gap-5 border-t border-blue-400/30 py-5">
                <IoLogOutOutline className="h-5.5 w-5.5 shrink-0" />
                <button className="logout-label text-sm hover:text-blue-300">Logout</button>
            </div>

        </aside>
    )
}

export default AdminHeader