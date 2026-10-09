import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import logo from '/images/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import Cookies from 'js-cookie'

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const user = useSelector(state => state.auth.user)

    const isLoggedIn = Cookies.get('loginProfile') ? true : false

    const dispatch = useDispatch()

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const profileRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsProfileOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        Cookies.remove('loginProfile')
        dispatch(setUser(null))
    }

    return (
        <div className='bg-white border-b-gray-300 shadow'>
            <div className='max-w-[1650px] mx-auto py-5'>
                <div className='flex justify-between items-center px-5 gap-5'>
                    <div className='lg:w-1/5 flex-none'>
                        <Link to="/"><img src={logo} title="Vishalatha Cart | Shopping Assistant" alt="Vishalatha Cart | Shopping Assistant" /></Link>
                    </div>
                    <div className='lg:w-3/5 shrink items-center text-center hidden md:block'>
                        <div className='flex border border-gray-400 outline-gray-400 rounded-full px-3 py-1 max-w-150 mx-auto'>
                            <input type="search" className='w-full outline-0' placeholder='Search for products, brands and more...' />
                            <AiOutlineSearch size={25} />
                        </div>
                    </div>
                    <div className='lg:w-1/5 flex-none'>
                        <ul className='hidden md:flex gap-6 font-semibold justify-center items-center text-[#031d44]'>
                            <li>
                                {isLoggedIn && (
                                    <div className="relative w-max flex flex-col justify-center items-center" ref={profileRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                                            aria-haspopup="true"
                                            aria-expanded={isProfileOpen}
                                            aria-controls="dropdown-menu"
                                            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                        >
                                            <img src="https://readymadeui.com/team-1.webp" alt="profile-pic" className="size-9 border border-slate-300 rounded-full" />
                                            <span className="ml-2 text-sm text-left"><span className="text-xs">Hello,</span> <br/>{user.firstName} {user.lastName}</span>
                                        </button>

                                        <ul
                                            id="dropdown-menu"
                                            className={`${isProfileOpen ? "block" : "hidden"} absolute right-0 top-full mt-2 p-2 space-y-0.5 min-w-48 w-full text-slate-800 text-sm font-medium bg-white border border-slate-300 rounded-md shadow-lg z-20 overflow-hidden dark:text-slate-400 dark:bg-neutral-800 dark:border-neutral-700`}
                                        >
                                            <li>
                                                <Link to="/profile" className="w-full p-2 flex items-center gap-2.5 rounded-md cursor-pointer transition-colors hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-slate-50 dark:hover:bg-neutral-700">
                                                    My Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <button type="button" onClick={handleLogout} className="w-full p-2 flex items-center gap-2.5 rounded-md cursor-pointer transition-colors hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-slate-50 dark:hover:bg-neutral-700">
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {!isLoggedIn && (
                                    <Link className='flex gap-4 text-[#031d44]' to="/login">
                                        <FaRegCircleUser color="#031d44" size={25} />
                                        <span>Login</span>
                                    </Link>
                                )}
                            </li>
                            <li>
                                <Link className='flex gap-4 text-[#031d44]' to="/cart"><FaCartShopping color="#031d44" size={25} /></Link>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>
                <div className='flex justify-between items-center px-4 font-semibold'>
                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex gap-5 text-[#031d44]'>
                        <li className='px-4 py-2 cursor-pointer duration-300 hover:text-[#0162fc]'>
                            <Link to="/"> Home </Link>
                        </li>
                        <li className='px-4 py-2 cursor-pointer duration-300 hover:text-[#0162fc]'>
                            <Link to="/products"> Shop </Link>
                        </li>
                        <li className='px-4 py-2 cursor-pointer duration-300 hover:text-[#0162fc]'>
                            <Link to="/about"> About </Link>
                        </li>
                        <li className='px-4 py-2 cursor-pointer duration-300 hover:text-[#0162fc]'>
                            <Link to="/contact"> Contact Us </Link>
                        </li>
                    </ul>

                    {/* Mobile Navigation Menu */}
                    <ul
                        className={
                            nav
                                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-200 shadow-2xl bg-white text-[#031d44] ease-in-out duration-500 font-medium'
                                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                        }
                    >
                        <li className='p-4 border-b-gray-400 duration-300  hover:text-[#0162fc] cursor-pointer'>
                            <Link to="/"> Home </Link>
                        </li>
                        <li className='p-4 border-b-gray-400 duration-300 hover:text-[#0162fc] cursor-pointer'>
                            <Link to="/products"> Shop </Link>
                        </li>
                        <li className='p-4 border-b-gray-400 duration-300 hover:text-[#0162fc] cursor-pointer'>
                            <Link to="/about"> About </Link>
                        </li>
                        <li className='p-4 border-b-gray-400 duration-300 hover:text-[#0162fc] cursor-pointer'>
                            <Link to="/contact"> Contact Us </Link>
                        </li>
                        <li className='p-4 border-b-gray-400 duration-300 hover:text-[#0162fc] cursor-pointer'>
                            <Link className='flex gap-4' to="/login"><FaRegCircleUser size={25} /><span>Login</span></Link>
                        </li>
                        <li className='p-4 border-b-gray-400 duration-300 hover:text-[#0162fc] cursor-pointer'>
                            <Link className=' flex gap-4' to="/cart"><FaCartShopping size={25} /><span>Cart</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Header