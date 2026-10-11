import { useSelector, useDispatch } from 'react-redux';
import { FiPlus, FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { deleteProduct } from '../../features/products/productsSlice';
import { Link } from 'react-router';


const AdminProduct = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList.value);

    console.log(productList);

    return (
        <div className="flex min-w-0 flex-1 flex-col">
            <main className="main-bg main-content flex-1 p-5 md:p-6">
                <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="page-title text-[29px] font-bold tracking-tight text-[#0b2856]">Products</h2>
                        <p className="mt-1 text-[14px] text-[#527bb9]">
                            Manage your store products. Add, edit, or remove products from your catalog.
                        </p>
                    </div>

                    <Link to="/admin/products/add" className="flex h-[40px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white shadow-sm transition hover:bg-blue-700">
                        <FiPlus className="h-5 w-5" />
                        Add Product
                    </Link>
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
                                {productList.map((product) => (
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
            </main>
        </div>
    )
}

export default AdminProduct