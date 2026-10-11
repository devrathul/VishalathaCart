import { useDispatch, useSelector } from 'react-redux'
import { toggleBrand } from '../../features/products/productsSlice'

const ProductBrand = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productList.value)
    const selectedBrands = useSelector(state => state.productList.selectedBrand)
    const brands = products.reduce((brandCounts, product) => {
        brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1
        return brandCounts
    }, {})

    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Brand <span>⌃</span></div>
            <div className="space-y-2.5 text-xs text-[#164c85]">
                {Object.entries(brands).map(([brand, count]) => (
                    <label className="flex items-center justify-between" key={brand}>
                        <span className="flex items-center gap-2">
                            <input type="checkbox" className="accent-[#087ff5]" checked={selectedBrands.includes(brand)}
                                onChange={() => dispatch(toggleBrand(brand))} /> {brand}
                        </span>
                        <span className="text-slate-400">({count})</span>
                    </label>
                ))}
            </div>
            <button className="mt-3 text-[11px] font-semibold text-brand-600">Show More⌄</button>
        </div>
    )
}

export default ProductBrand