import {useSelector} from 'react-redux';
import { FiPlus } from "react-icons/fi";


const AdminCustomers = () => {

    const productList = useSelector((state) => state.productList.value);
    console.log(productList);

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

                    <button id="addCustomerBtn" className="flex h-[40px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white shadow-sm transition hover:bg-blue-700">
                        <FiPlus className="h-5 w-5" />
                        Add Customer
                    </button>
                </section>

                <section className="overflow-hidden rounded-[10px] border border-blue-100 bg-white/80">

                    <div className="filter-controls flex flex-wrap items-center gap-3 border-b border-blue-50 p-4">

                        <div className="relative min-w-[180px] flex-1">
                            <i data-lucide="search" className="absolute left-3 top-1/2 h-[19px] w-[19px] -translate-y-1/2 text-blue-500"></i>
                            <input
                                id="productSearch"
                                type="search"
                                placeholder="Search products by name, brand, or SKU..."
                                className="h-[39px] w-full rounded-lg border border-blue-100 bg-[#f9fcff] pl-9 pr-3 text-[13px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <select id="categoryFilter" className="h-[39px] min-w-[165px] rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400">
                            <option value="">All Categories</option>
                            <option>Electronics</option>
                            <option>Sports</option>
                            <option>Fashion</option>
                            <option>Computers</option>
                            <option>Beauty</option>
                            <option>Bags</option>
                        </select>

                        <select id="statusFilter" className="h-[39px] min-w-[165px] rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400">
                            <option value="">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>

                        <select id="sortFilter" className="h-[39px] min-w-[175px] rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400">
                            <option value="newest">Sort by: Newest First</option>
                            <option value="name">Sort by: Name</option>
                            <option value="priceLow">Sort by: Price Low to High</option>
                            <option value="priceHigh">Sort by: Price High to Low</option>
                            <option value="stock">Sort by: Stock</option>
                        </select>
                    </div>

                    <div className="custom-scrollbar overflow-x-auto px-4 pt-3">
                        <table className="w-full min-w-[1000px] border-collapse text-left text-[12px]">

                            <thead>
                                <tr className="h-[39px] rounded-lg bg-[#f2f7fc] text-[#153d7d]">
                                    <th className="px-3 font-semibold">ID</th>
                                    <th className="px-3 font-semibold">Product</th>
                                    <th className="px-3 font-semibold">Category</th>
                                    <th className="px-3 font-semibold">Price</th>
                                    <th className="px-3 font-semibold">Stock</th>
                                    <th className="px-3 font-semibold">Status</th>
                                    <th className="px-3 font-semibold">Rating</th>
                                    <th className="rounded-r-lg px-3 text-center font-semibold">Actions</th>
                                </tr>
                            </thead>

                            <tbody id="productTableBody">
                            </tbody>
                        </table>

                        <p id="emptyMessage" className="hidden py-12 text-center text-sm text-slate-500">
                            No products found. Try changing your search or filters.
                        </p>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default AdminCustomers