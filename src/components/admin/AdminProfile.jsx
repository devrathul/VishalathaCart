import {Link} from 'react-router'

const AdminProfile = () => (
    <main className="w-full p-3 sm:p-5">
        <div class="flex flex-col sm:flex-row sm:items-center
                    sm:justify-between gap-4 mb-8">

            <div>
                <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">
                    Admin Dashboard
                </h1>
                <p class="text-sm text-gray-500 mt-2">
                    Welcome back! Manage your Vishalatha Cart store.
                </p>
            </div>

            <div class="flex items-center gap-3">
                <span class="text-sm text-gray-600">
                    Administrator
                </span>
                <div class="w-10 h-10 rounded-full bg-blue-600
                            text-white flex items-center justify-center
                            font-bold">
                    A
                </div>
            </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-4 gap-5">

            <div class="bg-white rounded-xl border border-gray-200
                        p-5 shadow-sm hover:shadow-md transition">

                <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-lg bg-blue-100
                                flex items-center justify-center
                                text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87
                                  M9 20H2v-2a4 4 0 017.75-1.4
                                  M15 20v-2a6 6 0 00-12 0v2
                                  M15 7a4 4 0 11-8 0 4 4 0 018 0
                                  M21 8a4 4 0 01-3 3.87" />
                        </svg>
                    </div>

                    <span class="text-xs font-medium text-green-600
                                 bg-green-50 px-2 py-1 rounded-full">
                        Active
                    </span>
                </div>

                <p class="text-sm text-gray-500 mt-5">Total Customers</p>
                <h2 class="text-3xl font-bold text-gray-800 mt-1">
                    1,248
                </h2>
            </div>

            <div class="bg-white rounded-xl border border-gray-200
                        p-5 shadow-sm hover:shadow-md transition">

                <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-lg bg-purple-100
                                flex items-center justify-center
                                text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4
                                  m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>

                    <span class="text-xs font-medium text-purple-600
                                 bg-purple-50 px-2 py-1 rounded-full">
                        Inventory
                    </span>
                </div>

                <p class="text-sm text-gray-500 mt-5">Total Products</p>
                <h2 class="text-3xl font-bold text-gray-800 mt-1">
                    356
                </h2>
            </div>

            <div class="bg-white rounded-xl border border-gray-200
                        p-5 shadow-sm hover:shadow-md transition">

                <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-lg bg-orange-100
                                flex items-center justify-center
                                text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.9
                                  a2 2 0 002-1.6L22 7H6
                                  M10 21a1 1 0 100-2 1 1 0 000 2
                                  M18 21a1 1 0 100-2 1 1 0 000 2" />
                        </svg>
                    </div>
                </div>

                <p class="text-sm text-gray-500 mt-5">Total Orders</p>
                <h2 class="text-3xl font-bold text-gray-800 mt-1">
                    892
                </h2>
            </div>

            <div class="bg-white rounded-xl border border-gray-200
                        p-5 shadow-sm hover:shadow-md transition">

                <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-lg bg-green-100
                                flex items-center justify-center
                                text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6z
                                  M4 14h6v6H4zM14 14h6v6h-6z" />
                        </svg>
                    </div>

                    <span class="text-xs font-medium text-green-600
                                 bg-green-50 px-2 py-1 rounded-full">
                        Organized
                    </span>
                </div>

                <p class="text-sm text-gray-500 mt-5">Total Categories</p>
                <h2 class="text-3xl font-bold text-gray-800 mt-1">
                    24
                </h2>
            </div>

        </div>

        <section class="mt-8 bg-white rounded-xl border
                        border-gray-200 p-5 sm:p-6 shadow-sm">

            <h2 class="text-lg font-bold text-gray-800 mb-5">
                Quick Actions
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2
                        lg:grid-cols-4 gap-4">

                <Link to="/admin/customers" class="flex items-center gap-3 p-4 rounded-lg
                          border border-gray-200 hover:bg-blue-50
                          hover:border-blue-200 transition">
                    <span class="text-blue-600 text-xl">＋</span>
                    <span class="text-sm font-medium text-gray-700">
                        View Customers
                    </span>
                </Link>

                <Link to="/admin/products/add" class="flex items-center gap-3 p-4 rounded-lg
                          border border-gray-200 hover:bg-purple-50
                          hover:border-purple-200 transition">
                    <span class="text-purple-600 text-xl">＋</span>
                    <span class="text-sm font-medium text-gray-700">
                        Add New Product
                    </span>
                </Link>

                <Link to="/admin/orders" class="flex items-center gap-3 p-4 rounded-lg
                          border border-gray-200 hover:bg-orange-50
                          hover:border-orange-200 transition">
                    <span class="text-orange-600 text-xl">↗</span>
                    <span class="text-sm font-medium text-gray-700">
                        View Orders
                    </span>
                </Link>

                <Link to="/admin/categories" class="flex items-center gap-3 p-4 rounded-lg
                          border border-gray-200 hover:bg-green-50
                          hover:border-green-200 transition">
                    <span class="text-green-600 text-xl">＋</span>
                    <span class="text-sm font-medium text-gray-700">
                        Add Category
                    </span>
                </Link>

            </div>
        </section>

        <section class="mt-8 bg-white rounded-xl border
                        border-gray-200 p-5 sm:p-6 shadow-sm">

            <h2 class="text-lg font-bold text-gray-800 mb-5">
                Store Overview
            </h2>

            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead>
                        <tr class="text-gray-500 bg-gray-50">
                            <th class="p-3 font-semibold">Module</th>
                            <th class="p-3 font-semibold">Description</th>
                            <th class="p-3 font-semibold">Status</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                        <tr>
                            <td class="p-3 font-medium text-gray-800">
                                Customers
                            </td>
                            <td class="p-3 text-gray-500">
                                Manage customer accounts and profiles
                            </td>
                            <td class="p-3">
                                <span class="px-2 py-1 rounded-full
                                             bg-green-50 text-green-700
                                             text-xs">
                                    Available
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td class="p-3 font-medium text-gray-800">
                                Products
                            </td>
                            <td class="p-3 text-gray-500">
                                Add, edit and manage store products
                            </td>
                            <td class="p-3">
                                <span class="px-2 py-1 rounded-full
                                             bg-green-50 text-green-700
                                             text-xs">
                                    Available
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td class="p-3 font-medium text-gray-800">
                                Orders
                            </td>
                            <td class="p-3 text-gray-500">
                                Review and update customer orders
                            </td>
                            <td class="p-3">
                                <span class="px-2 py-1 rounded-full
                                             bg-green-50 text-green-700
                                             text-xs">
                                    Available
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td class="p-3 font-medium text-gray-800">
                                Categories
                            </td>
                            <td class="p-3 text-gray-500">
                                Organize products into categories
                            </td>
                            <td class="p-3">
                                <span class="px-2 py-1 rounded-full
                                             bg-green-50 text-green-700
                                             text-xs">
                                    Available
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    </main>
)

export default AdminProfile