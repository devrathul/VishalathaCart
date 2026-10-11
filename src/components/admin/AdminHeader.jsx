import { Link, useNavigate } from 'react-router'
import { AiOutlineProduct, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import footerlogo from '/images/logo-footer.png'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'


const AdminHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogOut = () => {
        Cookies.remove('loginProfile')
        dispatch(setUser(null))
        navigate("/")
    }

    return (
        <aside className="bg-[#0b2648] text-white flex w-[252px] min-w-[252px] flex-col text-white">

            <div className="brand flex h-[68px] items-center gap-3 border-b border-white/10 px-6">
                <div>
                    <img className='w-72' src={footerlogo} title="Vishalatha Cart | Shopping Assistant" alt="Vishalatha Cart | Shopping Assistant" />
                </div>
            </div>

            <nav className="nav-menu flex-1 space-y-1 px-3.5 py-4">

                <Link to="/admin" className="nav-link flex items-center gap-5 rounded-lg px-4 py-3 text-[14px] text-slate-200 hover:bg-white/10">
                    <AiOutlineProduct className="h-5.5 w-5.5 shrink-0" />
                    <span className="nav-label">Dashboard</span>
                </Link>

                <Link to="/admin/products" className="nav-link flex items-center gap-5 rounded-lg px-4 py-3 text-[14px] text-slate-200 hover:bg-white/10">
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

            <div className="logout-area mx-5 border-t border-blue-400/30 py-5">
                <button className=" flex items-center gap-5 logout-label text-sm hover:text-blue-300 cursor-pointer" onClick={onLogOut}>
                    <IoLogOutOutline className="h-5.5 w-5.5 shrink-0" /> Logout
                </button>
            </div>

        </aside>
    )
}

export default AdminHeader