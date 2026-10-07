import { useDispatch, useSelector } from 'react-redux'
import { toggleCategory } from '../../features/products/productsSlice'

const ProductCategory = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productList.value)
    const selectedCategories = useSelector(state => state.productList.selectedCategories)
    const categories = products.reduce((categoryCounts, product) => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1
        return categoryCounts
    }, {})

    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Categories <span>⌃</span></div>
            <div className="space-y-2.5 text-xs text-[#164c85]">
                {Object.entries(categories).map(([category, count]) => (
                    <label className="flex items-center justify-between gap-2" key={category}>
                        <span className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#087ff5]"
                                checked={selectedCategories.includes(category)}
                                onChange={() => dispatch(toggleCategory(category))}
                            />
                            {category}
                        </span>
                        <span className="text-slate-400">({count})</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ProductCategory