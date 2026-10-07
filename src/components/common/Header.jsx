import React, { useState } from 'react';
import { Link } from 'react-router'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import logo from '/images/logo.png'

const Header = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div className='bg-white border-b-gray-300 shadow'>
            <div className='max-w-[1650px] mx-auto py-5'>
                <div className='flex justify-between items-center px-5 gap-5'>
                    <div className='lg:w-1/5 flex-none'>
                        <img src={logo} title="Vishalatha Cart | Shopping Assistant" alt="Vishalatha Cart | Shopping Assistant" />
                    </div>
                    <div className='lg:w-3/5 shrink items-center text-center hidden md:block'>
                        <div className='flex border border-gray-400 outline-gray-400 rounded-full px-3 py-1 max-w-150 mx-auto'>
                            <input type="search" className='w-full outline-0' placeholder='Search for products, brands and more...' />
                            <AiOutlineSearch size={25} />
                        </div>
                    </div>
                    <div className='lg:w-1/5 flex-none'>
                        <ul className='hidden md:flex gap-6 font-semibold'>
                            <li className='flex gap-4 text-[#031d44]'><FaRegCircleUser color="#031d44" size={25} /><span>Login</span></li>
                            <li className='flex gap-4 text-[#031d44]'><FaCartShopping color="#031d44" size={25} /><span>Cart</span></li>
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