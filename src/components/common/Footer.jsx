import footerlogo from '/images/logo-footer.png'
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
    return (
        <footer>
            <div className=' bg-[#0b2648] text-white px-10 lg:px-18 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <div>
                        <img className='w-72' src={footerlogo} title="Vishalatha Cart | Shopping Assistant" alt="Vishalatha Cart | Shopping Assistant" />
                        <p className='mt-2 leading-relaxed'>
                            Your one-stop shop for the best products,<br />
                            brands and deals.
                        </p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg mb-2'>Quick Links</h3>
                        <ul className='leading-relaxed'>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Deal</li>
                            <li>About</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg mb-2'>Help</h3>
                        <ul className='leading-relaxed'>
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>About</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg mb-2'>Vishalatha Cart</h3>
                        <p className='leading-relaxed'>Kannur, Thalassery, 670101</p>
                        <p className='leading-relaxed'><a href="tel:0000000000">+91 000 000 0000</a></p>
                        <ul className='flex gap-5 mt-2'>
                            <li><MdOutlineFacebook size={25} /></li>
                            <li><FaSquareInstagram size={25} /></li>
                            <li><SlSocialTwitter size={25} /></li>
                            <li><AiOutlineYoutube size={25} /></li>
                            <li><CiLinkedin size={25} /></li>
                        </ul>
                    </div>
                </div>
                <p className='mt-10 text-center'>@ 2025 Vishalatha Cart. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer