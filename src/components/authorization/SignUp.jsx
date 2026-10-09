import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { setUsers } from '../../features/users/usersSlice'
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userList = useSelector(state => state.users.value)
    const [errors, setErrors] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const firstName = formData.get('firstName')?.trim()
        const lastName = formData.get('lastName')?.trim()
        const phone = formData.get('phone')?.trim()
        const email = formData.get('email')?.trim().toLowerCase()
        const password = formData.get('password')
        const confirmPassword = formData.get('confirm-password')
        const newErrors = {}

        if (!firstName) {
            newErrors.firstName = 'First name is required'
        }
        if (!lastName) {
            newErrors.lastName = 'Last name is required'
        }
        if (!phone) {
            newErrors.phone = 'Phone is required'
        } else if (userList.some(user => user.phone?.trim() === phone)) {
            newErrors.phone = 'An account with this phone number already exists'
        }
        if (!email) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Enter a valid email address'
        } else if (userList.some(user => user.email?.toLowerCase() === email)) {
            newErrors.email = 'An account with this email already exists'
        }
        if (!password) {
            newErrors.password = 'Password is required'
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        dispatch(setUsers({
            id: uuidv4(),
            firstName,
            lastName,
            email,
            phone,
            password,
            role: 'customer',
            status: 'active',
            profile: {
                "avatar": "",
                "gender": null,
                "dateOfBirth": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "postalCode": "",
                    "country": ""
                },
                "wishlist": [],
                "cartId": "",
                "orderIds": []
            }
        }))
        navigate('/login')
    }

    return (
        <>
            <div className="min-h-screen bg-[#eef8ff] flex items-center justify-center p-4">
                <div className="w-full max-w-[940px] min-h-[620px] bg-white rounded-xl overflow-hidden shadow-login border border-[#dceeff] flex">
                    <div className="relative hidden md:flex md:w-[43%] bg-gradient-to-b from-[#f0f9ff] to-[#e8f6ff] px-10 py-8 flex-col">
                        <div className="flex items-center gap-2">
                            <div className="leading-[0.9]">
                                <div className="text-[#075bd6] font-extrabold text-[16px]">
                                    Vishalatha
                                </div>
                                <div className="text-[#075bd6] font-extrabold text-[16px]">
                                    Cart
                                </div>
                            </div>
                        </div>
                        <div className="mt-14">
                            <h1 className="text-[#173b70] text-[25px] leading-[1.18] font-extrabold max-w-[260px]">
                                India's<br />
                                favorite<br />
                                shopping<br />
                                destination
                            </h1>
                            <p className="mt-4 text-[#6080a5] text-[12px] leading-[1.55] max-w-[240px]">
                                Great products. Best prices.<br />
                                Happiness delivered.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-[57%] px-6 sm:px-10 md:px-12 py-10 flex flex-col justify-center">
                        <div className="max-w-[390px] mx-auto w-full">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="firstName"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">First name</label>
                                    <input type="text" id="firstName" name="firstName" placeholder="John" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.firstName && (<p className="text-red-500 text-sm">{errors.firstName}</p>)}
                                </div>
                                <div>
                                    <label htmlFor="lastName"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Doe" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.lastName && (<p className="text-red-500 text-sm">{errors.lastName}</p>)}
                                </div>
                                <div>
                                    <label htmlFor="phone"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Phone</label>
                                    <input type="text" id="phone" name="phone" placeholder="(123) 456-7890" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.phone && (<p className="text-red-500 text-sm">{errors.phone}</p>)}
                                </div>
                                <div>
                                    <label htmlFor="email"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                                </div>
                                <div>
                                    <label htmlFor="password"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Password</label>
                                    <input type="password" id="password" name="password" placeholder="••••••••" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.password && (<p className="text-red-500 text-sm">{errors.password}</p>)}
                                </div>
                                <div>
                                    <label htmlFor="confirm-password"
                                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Confirm
                                        password</label>
                                    <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                    {errors.confirmPassword && (<p className="text-red-500 text-sm">{errors.confirmPassword}</p>)}
                                </div>

                                <div className="flex items-start flex-wrap gap-2">
                                    <label className="flex items-center group has-[input:checked]:text-slate-900">
                                        <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                                        {/* Custom box */}
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600" aria-hidden="true">
                                            {/* Checkmark */}
                                            <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                                                fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 5l3 3 7-7" />
                                            </svg>
                                        </span>
                                        <span className="ml-3 text-sm text-slate-700">
                                            I accept the
                                        </span>
                                    </label>

                                    <a href="#"
                                        className="ml-1 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                        Terms and Conditions
                                    </a>
                                </div>
                                <button type="submit"
                                    className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    Create an account
                                </button>
                            </form>
                            <p className="mt-9 text-centertext-[#7890a9] text-[10px]"> Already have an account?
                                <Link to="/login" className="text-[#087BFF] font-semibold ml-1 hover:underline"> Sign in </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp