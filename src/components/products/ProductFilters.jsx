import ProductCategory from './ProductCategory'
import ProductPriceRange from './ProductPriceRange'
import ProductBrand from './ProductBrand'
import ProductRating from './ProductRating'
import ProductColor from './ProductColor'
import { useDispatch } from 'react-redux'
import { clearCategoryFilters } from '../../features/products/productsSlice'

const ProductFilter = () => {
    const dispatch = useDispatch()

    return (
        <aside className="hidden rounded-lg border border-[#cfe4f8] bg-white p-3 shadow-soft lg:block">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="flex items-center gap-2 font-bold text-[#0b3d73]">
                    <span className="text-brand-500">☷</span> Filters
                </h2>
                <button className="text-xs font-medium text-brand-600" onClick={() => dispatch(clearCategoryFilters())}>Clear All</button>
            </div>

            <ProductCategory />

            <ProductPriceRange />

            <ProductBrand />

            <ProductRating />

            <ProductColor />
            
        </aside>
    )
}

export default ProductFilter