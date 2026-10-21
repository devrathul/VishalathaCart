import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { removeCategory } from '../../features/categories/categoriesSlice'
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react'
import { Link } from 'react-router'


const AdminCategories = () => {

    const [searchCategoryItem, setSearchCategoryItem] = useState('')
    const [categoryStatus, setCategoryStatus] = useState('')
    const categoriesList = useSelector((state) => state.categories.value);
    const dispatch = useDispatch()

    const searchTerm = searchCategoryItem.trim().toLowerCase()

    const filterategories = categoriesList.filter((category) => {

        const matchesSearch = !searchTerm || [
            category.categoryName,
            category.description,
        ].some(value => String(value ?? '').toLowerCase().includes(searchTerm))

        const categoryStatusFilterlist = !categoryStatus || categoryStatus === category.status

        return matchesSearch && categoryStatusFilterlist
    })

    const onCategories = (event) => {
        setSearchCategoryItem(event.target.value)
    }

    const onCategoryStatus = (event) => {
        setCategoryStatus(event.target.value)
    }

    return (
        <>
            <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="page-title text-[29px] font-bold tracking-tight text-[#0b2856]">Categories</h2>
                    <p className="mt-1 text-[14px] text-[#527bb9]">
                        Manage your store categories. Add, edit, or remove categories from your catalog.
                    </p>
                </div>

                <Link to="/admin/category/add" className="flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white shadow-sm transition hover:bg-blue-700">
                    <FiPlus className="h-5 w-5" />
                    Add Category
                </Link>
            </section>

            <section className="overflow-hidden rounded-[10px] border border-blue-100 bg-white/80">

                <div className="filter-controls flex flex-wrap items-center gap-3 border-b border-blue-50 p-4">

                    <div className="relative min-w-45 flex-1">
                        <IoMdSearch className="absolute left-3 top-1/2 h-4.75 w-4.75 -translate-y-1/2" />
                        <input id="searchInput" type="text" placeholder="Search categories by name..." value={searchCategoryItem}
                            onChange={onCategories} className="h-9.75 w-full rounded-lg border border-blue-100 bg-[#f9fcff] pl-9 pr-3 text-[13px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                    </div>

                    <select id="statusFilter" onChange={onCategoryStatus} className="h-9.75 min-w-41.25 rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400" value={categoryStatus}>
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div className="custom-scrollbar overflow-x-auto px-4 py-3">
                    <table  className="w-full min-w-250 border-collapse text-left text-[12px]">

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
                            {filterategories.map((categor) => (
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
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {categor.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-4">
                                            <Link to={`/admin/category/${categor.id}`} aria-label={`Edit ${categor.categoryName}`} className="text-blue-500 transition
                                               hover:text-blue-700">
                                                <FiEdit className="h-5 w-5" />
                                            </Link>

                                            <button onClick={() => dispatch(removeCategory(categor.id))} aria-label="Delete" className="text-red-500 transition
                                               hover:text-red-700">
                                                <MdOutlineDelete className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    {filterategories.length === 0 && (
                        <p id="emptyMessage" className="py-10 text-center text-sm text-slate-500">
                            No categories found.
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}

export default AdminCategories