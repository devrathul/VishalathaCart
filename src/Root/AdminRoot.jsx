import { Outlet } from "react-router";
import AdminHeader from '../components/admin/AdminHeader'

export default function AdminRoot() {
    return (
        <>
            <div className="flex min-h-screen">
                <AdminHeader />
                <Outlet />
            </div>
        </>
    )
}