import { useSelector, useDispatch } from 'react-redux';
import { FiPlus, FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { deleteProduct } from '../../features/products/productsSlice';
import { Link } from 'react-router';
import { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { toggleCategory } from '../../features/products/productsSlice'


const AdminProduct = () => {

    const dispatch = useDispatch();

    const [searchItem, setSearchItem] = useState('')
    const [categoryItem, setCategoryItem] = useState('')
    const [sortOption, setSortOption] = useState('0')
    const [productStatus, setStatus] = useState('')
    const productList = useSelector((state) => state.productList.value);
    const categoryList = useSelector((state) => state.categories.value).filter((category) => category.status === "Active");

    const searchTerm = searchItem.trim().toLowerCase()


    const filteredProducts = productList.filter((product) => {
        const matchesSearch = !searchTerm || [
            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.sku,
            product.description
        ].some(value => String(value ?? '').toLowerCase().includes(searchTerm))

        const matchesCategory = categoryItem.length === 0 || categoryItem.includes(product.category)

        const statusCheck = !productStatus || productStatus === product.status
        console.log(statusCheck)

        return matchesSearch & matchesCategory & statusCheck
    })

    const sortedProducts = [...filteredProducts].sort((productA, productB) => {
        const ratingA = Number(productA.rating)
        const ratingB = Number(productB.rating)
        const priceA = Number(productA.price)
        const priceB = Number(productB.price)

        switch (sortOption) {
            case '1':
                return ratingA - ratingB
            case '2':
                return ratingB - ratingA
            case '3':
                return Number(productB.id) - Number(productA.id)
            case '4':
                return priceA - priceB
            case '5':
                return priceB - priceA
            default:
                return Number(Boolean(productB.isBestSeller)) - Number(Boolean(productA.isBestSeller))
                    || ratingB - ratingA
        }
    })

    const onCategoriesFilter = (event) => {
        setCategoryItem(event.target.value)
        toggleCategory(categoryItem)
    }

    const onSearch = (event) => {
        setSearchItem(event.target.value)
    }

    const onSortChange = (event) => {
        setSortOption(event.target.value)
    }

    const onSetStatus = (event) => {
        setStatus(event.target.value)
    }

    return (
        <>
            <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="page-title text-[29px] font-bold tracking-tight text-[#0b2856]">Products</h2>
                    <p className="mt-1 text-[14px] text-[#527bb9]">
                        Manage your store products. Add, edit, or remove products from your catalog.
                    </p>
                </div>

                <Link to="/admin/products/add" className="flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white shadow-sm transition hover:bg-blue-700">
                    <FiPlus className="h-5 w-5" />
                    Add Product
                </Link>
            </section>

            <section className="overflow-hidden rounded-[10px] border border-blue-100 bg-white/80">

                <div className="filter-controls flex flex-wrap items-center gap-3 border-b border-blue-50 p-4">

                    <div className="relative min-w-45 flex-1">
                        <IoMdSearch className="absolute left-3 top-1/2 h-4.75 w-4.75 -translate-y-1/2" />
                        <input
                            id="productSearch"
                            type="search"
                            value={searchTerm}
                            onChange={onSearch}
                            placeholder="Search products by name, brand, or SKU..."
                            className="h-9.75 w-full rounded-lg border border-blue-100 bg-[#f9fcff] pl-9 pr-3 text-[13px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <select id="categoryFilter" className="h-9.75 min-w-41.25 rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400" onChange={onCategoriesFilter}>
                        <option value="">All Categories</option>
                        {categoryList.map(category => <option value={category.categoryName} key={category.id}>{category.categoryName}</option>)}
                    </select>

                    <select id="statusFilter" className="h-9.75 min-w-41.25 rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400" value={productStatus} onChange={onSetStatus}>
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>

                    <div>
                        <label htmlFor='sortFilter'>Sort by</label>
                        <select id="sortFilter" className="mx-3 h-9.75 min-w-43.75 rounded-lg border border-blue-100 bg-white px-3 text-[13px] outline-none focus:border-blue-400" value={sortOption} onChange={onSortChange}>
                            <option value="0">Popular</option>
                            <option value="1">Rating: Low to High</option>
                            <option value="2">Rating: High to Low</option>
                            <option value="3">Newest</option>
                            <option value="4">Price: Low to High</option>
                            <option value="5">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="custom-scrollbar overflow-x-auto px-4 py-3">
                    <table className="w-full min-w-250 border-collapse text-left text-[12px]">

                        <thead>
                            <tr className="h-9.75 rounded-lg bg-[#f2f7fc] text-[#153d7d]">
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
                            {sortedProducts.map((product) => (
                                <tr key={product.id} className="h-12.5 border-b border-blue-100 hover:bg-blue-50">
                                    <td className="px-3">{product.id}</td>
                                    <td className="px-3">{product.name}</td>
                                    <td className="px-3">{product.category}</td>
                                    <td className="px-3">${product.price.toFixed(2)}</td>
                                    <td className="px-3">{product.stock}</td>
                                    <td className="px-3">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-3">{product.rating}</td>
                                    <td className="rounded-r-lg px-3 text-center flex items-center align-center justify-center h-12.5 gap-5">
                                        <Link className="text-blue-600 hover:text-blue-900" to={`/admin/product/${product.id}`}>
                                            <FiEdit className="h-5 w-5" />
                                        </Link>
                                        <button className="ml-2 text-red-600 hover:text-red-900" onClick={() => dispatch(deleteProduct(product.id))}>
                                            <MdOutlineDelete className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p id="emptyMessage" className="hidden py-12 text-center text-sm text-slate-500">
                        No products found. Try changing your search or filters.
                    </p>
                </div>

            </section>
        </>
    )
}

export default AdminProduct