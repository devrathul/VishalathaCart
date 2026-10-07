import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import { useSelector } from 'react-redux'

const Products = () => {
    const productList = useSelector(state => state.productList.value)
    const selectedCategories = useSelector(state => state.productList.selectedCategories)
    const filteredProducts = selectedCategories.length
        ? productList.filter(product => selectedCategories.includes(product.category))
        : productList
    return (
        <>
            <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
                <button className="rounded-lg border border-[#b8d9f5] px-4 py-2 text-sm font-semibold text-[#0b4c8d]">☷ Filters</button>
                <button className="rounded-lg border border-[#b8d9f5] px-4 py-2 text-sm font-semibold text-[#0b4c8d]">Sort: Popular</button>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[205px_1fr] xl:grid-cols-[225px_1fr] my-10">

                <ProductFilters />

                <section className="min-w-0">
                    <div className="mb-6 hidden items-center gap-4 lg:flex">
                        <div className="flex h-9 flex-1 items-center rounded-full border border-[#c4def5] px-3.5">
                            <span className="mr-2 text-xl text-[#003f88]">⌕</span>
                            <input className="w-full text-xs outline-none" placeholder="Search products..." />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#0b315c]">
                            <span>Sort by:</span>
                            <select className="h-9 w-32 rounded-lg border border-[#c4def5] bg-white px-3 font-semibold outline-none">
                                <option>Popular</option>
                                <option>Newest</option>
                                <option>Price: Low</option>
                                <option>Price: High</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((eachProduct) => <ProductCard products={eachProduct} key={eachProduct.id} />)}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products