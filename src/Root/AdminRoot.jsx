import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";
import AdminHeader from '../components/admin/AdminHeader'

export default function AdminRoot() {
    let loginProfile = null
    const storedProfile = Cookies.get('loginProfile')

    try {
        loginProfile = storedProfile ? JSON.parse(storedProfile) : null
    } catch {
        Cookies.remove('loginProfile')
    }

    if (!loginProfile) {
        return <Navigate to="/login" replace />
    }

    if (loginProfile.role !== 'admin') {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <div className="flex min-h-screen">
                <AdminHeader />
                <Outlet />
            </div>
        </>
    )
}