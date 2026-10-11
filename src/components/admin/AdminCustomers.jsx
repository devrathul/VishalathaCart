import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import {removeUser} from '../../features/users/usersSlice'

const AdminCustomers = () => {

    const usersList = useSelector((state) => state.users.value);
    const dispatch = useDispatch()

    return (
        <div className="flex min-w-0 flex-1 flex-col">
            <main className="main-bg main-content flex-1 p-5 md:p-6">
                <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="page-title text-[29px] font-bold tracking-tight text-[#0b2856]">Customers</h2>
                        <p className="mt-1 text-[14px] text-[#527bb9]">
                            Manage your store customers. Add, edit, or remove customers from your database.
                        </p>
                    </div>
                </section>

                <section class="rounded-xl border border-blue-100
                    bg-white p-3 shadow-sm sm:p-4">

                    <div class="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2">

                        <div class="relative xl:col-span-1">
                            <i data-lucide="search"
                                class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"></i>

                            <input id="searchInput" type="search"
                                placeholder="Search by name, email, phone, or customer ID..."
                                class="h-10 w-full rounded-lg border border-blue-100 bg-slate-50/50 pl-10 pr-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <select id="statusFilter"
                            class="h-10 rounded-lg border border-blue-100 bg-white px-3 text-sm outline-none focus:border-blue-400">
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <input id="dateFilter" type="date" class="hidden h-10 rounded-lg border border-blue-100 px-3 text-sm" />
                    </div>

                    <div class="overflow-x-auto rounded-lg border border-blue-100">
                        <table class="w-full min-w-[1050px] text-left text-xs">
                            <thead class="bg-blue-50/70 text-[#18519b]">
                                <tr>
                                    <th class="px-3 py-3 font-semibold">Customer</th>
                                    <th class="px-3 py-3 font-semibold">Email</th>
                                    <th class="px-3 py-3 font-semibold">Phone</th>
                                    <th class="px-3 py-3 font-semibold">Status</th>
                                    <th class="px-3 py-3 text-center font-semibold">Actions</th>
                                </tr>
                                {usersList.map((user) => (<tr className="h-12.5 border-b border-blue-100 hover:bg-blue-50">
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.status}</td>
                                    <td className="rounded-r-lg px-3 text-center flex items-center align-center justify-center h-12.5 gap-5">
                                        <Link className="text-blue-600 hover:text-blue-900" to="">
                                            <FiEdit className="h-5 w-5" />
                                        </Link>
                                        <button className="ml-2 text-red-600 hover:text-red-900" onClick={()=>{dispatch(removeUser(user.id))}}>
                                            <MdOutlineDelete className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>))}
                            </thead>

                            <tbody id="customerTable" class="divide-y divide-blue-100 bg-white">
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AdminCustomers