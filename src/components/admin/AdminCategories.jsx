import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from "react-icons/fi";
import { removeCategory } from '../../features/categories/categoriesSlice'


const AdminCategories = () => {

    const categoriesList = useSelector((state) => state.categories.value);
    const dispatch = useDispatch()

    return (
        <>
            <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="page-title text-[29px] font-bold tracking-tight text-[#0b2856]">Categories</h2>
                    <p className="mt-1 text-[14px] text-[#527bb9]">
                        Manage your store categories. Add, edit, or remove categories from your catalog.
                    </p>
                </div>

                <button id="addProductBtn" className="flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white shadow-sm transition hover:bg-blue-700">
                    <FiPlus className="h-5 w-5" />
                    Add Category
                </button>
            </section>

            <section className="rounded-xl border border-blue-100 p-4
                        shadow-sm sm:p-5">

                <div className="mb-6 grid grid-cols-1 gap-4
                        md:grid-cols-12">

                    <div className="relative md:col-span-8">
                        <svg className="absolute left-4 top-1/2 h-5 w-5
                               -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                            <circle cx="11" cy="11" r="7" stroke-width="1.8"></circle>
                            <path d="m16 16 4 4" stroke-width="1.8" stroke-linecap="round"></path>
                        </svg>

                        <input id="searchInput" type="text" placeholder="Search categories by name..."
                            oninput="filterCategories()" className="h-12 w-full rounded-lg border
                               border-blue-100 bg-white pl-12 pr-4
                               text-sm outline-none transition
                               placeholder:text-slate-400
                               focus:border-blue-400
                               focus:ring-2 focus:ring-blue-100" />
                    </div>

                    <div className="md:col-span-2">
                        <select id="statusFilter" onchange="filterCategories()" className="h-12 w-full rounded-lg border
                               border-blue-100 bg-white px-4
                               text-sm outline-none
                               focus:border-blue-400">

                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse
                              text-left text-sm">

                        <thead>
                            <tr className="bg-[#f1f6fc] text-[#17477f]">
                                <th className="rounded-l-lg px-4 py-4 font-semibold">
                                    ID
                                </th>

                                <th className="px-4 py-4 font-semibold">
                                    Category
                                </th>

                                <th className="px-4 py-4 font-semibold">
                                    Description
                                </th>

                                <th className="px-4 py-4 font-semibold">
                                    Status
                                </th>

                                <th className="rounded-r-lg px-4 py-4 text-center
                                       font-semibold">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody id="categoryTable">
                            {categoriesList.map((categor) => (
                                <tr className="category-row border-b border-blue-100
                                   transition hover:bg-blue-50/40" data-id="1" data-name="Electronics"
                                    data-status="active" key={categor.id}>

                                    <td className="px-4 py-4">{categor.id}</td>

                                    <td className="whitespace-nowrap px-4 py-4
                                       font-medium text-[#123b70]">
                                        {categor.categoryName}
                                    </td>

                                    <td className="px-4 py-4 text-[#456b9f]">
                                        {categor.description}
                                    </td>

                                    <td className="px-4 py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {categor.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-4">
                                            <button onclick="editCategory(1)" aria-label="Edit" className="text-blue-500 transition
                                               hover:text-blue-700">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9M15 4l5 5M10 14l9-9a2.1 2.1 0 0 1 3 3l-9 9-5 1z" />
                                                </svg>
                                            </button>

                                            <button onClick={() => dispatch(removeCategory(categor.id))} aria-label="Delete" className="text-red-500 transition
                                               hover:text-red-700">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                                        d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <p id="emptyMessage" className="hidden py-10 text-center text-sm text-slate-500">
                        No categories found.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AdminCategories