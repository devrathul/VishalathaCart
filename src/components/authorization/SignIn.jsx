import { Link, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { setUser } from '../../features/auth/authSlice'
import { Navigate } from 'react-router';

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userList = useSelector(state => state.users.value)
    const [isUsers, setIsUsers] = useState(false)
    const [mobileOrEmail, setmobileOrEmail] = useState('')
    const [password, setPassword] = useState('')

    const isLoggedIn = Cookies.get('loginProfile') ? true : false

    const onIsUsers = () => {
        if (mobileOrEmail !== null) {
            const user = userList.some(user => user.email === mobileOrEmail || user.phone === mobileOrEmail)
            setIsUsers(user)
        } else {
            setIsUsers(false)
        }
    }

    const onMobileOrEmail = (event) => {
        setmobileOrEmail(event.target.value)
    }

    const onCheckPassword = (event) => {
        setPassword(event.target.value)
    }

    const onLogin = () => {

        const loggedInUser = userList.find(user =>
            (user.email === mobileOrEmail || user.phone === mobileOrEmail) && user.password === password
        )

        if (loggedInUser) {
            const loginProfile = {
                id: loggedInUser.id,
                firstName: loggedInUser.firstName,
                lastName: loggedInUser.lastName,
                email: loggedInUser.email,
                role: loggedInUser.role,
            }

            Cookies.set('loginProfile', JSON.stringify(loginProfile), { expires: 7 })

            dispatch(setUser(loginProfile))
            navigate('/')
        }
    }



    return (
        <>
            {isLoggedIn && <Navigate to="/" />}

            {!isLoggedIn && (
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

                                <h2 className="text-[#173b70] text-[20px] font-bold"> Login </h2>

                                <p className="text-[#728baa] text-[11px] mt-1.5 leading-relaxed">
                                    Get access to your orders, saved<br />
                                    addresses and more.
                                </p>

                                <form className="mt-7">
                                    <div className="mt-7 flex flex-col gap-2">
                                        <>
                                            <label htmlFor="mobileOrEmail">Enter mobile number or email</label>
                                            <input onChange={onMobileOrEmail} value={mobileOrEmail} type="text" id="mobileOrEmail" placeholder="Enter mobile number or email"
                                                className="h-10.75 flex-1 border border-[#d7e4f1] rounded-md px-4 py-3 text-[14px] text-[#456789] outline-none focus:border-[#087BFF] focus:ring-2 focus:ring-[#087BFF]/10" />
                                        </>
                                        {isUsers && (<>
                                            <label htmlFor="txtPassword">Enter password</label>
                                            <input onChange={onCheckPassword} type="password" id="txtPassword" placeholder="Enter password"
                                                className="h-10.75 flex-1 border border-[#d7e4f1] rounded-md px-4 py-3 text-[14px] text-[#456789] outline-none focus:border-[#087BFF] focus:ring-2 focus:ring-[#087BFF]/10" />
                                        </>)}
                                        <button type="button" onClick={isUsers ? onLogin : onIsUsers} className="mt-3 w-full h-10.75 bg-[#087BFF] hover:bg-[#006ee8] text-white text-[14px] font-semibold rounded-md transition duration-200 cursor-pointer">
                                            {isUsers ? 'Login' : 'Continue'}
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-9 text-centertext-[#7890a9] text-[10px]"> New to Vishalatha Cart?
                                    <Link to="/signup" className="text-[#087BFF] font-semibold ml-1 hover:underline"> Create an account </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignIn