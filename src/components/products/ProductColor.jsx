import { useDispatch, useSelector } from 'react-redux'
import { toggleColor } from '../../features/products/productsSlice'

const colorSwatches = {
    black: '#222222',
    white: '#ffffff',
    silver: '#c0c0c0',
    blue: '#3b82f6',
    'titanium blue': '#64748b',
    orange: '#f97316',
    midnight: '#1e293b',
    starlight: '#f5f0e6',
    'rose gold': '#b76e79',
    pink: '#ec4899',
    brown: '#92400e',
    green: '#22c55e',
    grey: '#808080',
    'titanium black': '#292524',
    'titanium silver': '#d1d5db'
}

const ProductColor = () => {
    const products = useSelector(state => state.productList.value)
    const selectedColors = useSelector(state => state.productList.selectedColors)

    const dispatch = useDispatch()
    
    const colorCounts = products.reduce((counts, product) => {
        const colors = Array.isArray(product.colors) ? product.colors : []
        new Set(colors).forEach(color => counts.set(color, (counts.get(color) || 0) + 1))
        return counts
    }, new Map())
    const colors = [...colorCounts.keys()].sort((first, second) => first.localeCompare(second))

    return (
        <div className="py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Color <span>⌃</span></div>
            <div className="space-y-2.5 text-xs text-[#164c85]">
                {colors.map(color => (
                    <label className="flex cursor-pointer items-center justify-between" key={color}>
                        <span className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#087ff5]"
                                checked={selectedColors.includes(color)}
                                onChange={() => dispatch(toggleColor(color))}
                            />
                            <i
                                className="h-3.5 w-3.5 rounded-full border border-slate-200"
                                style={{ backgroundColor: colorSwatches[color.toLowerCase()] || color }}
                                aria-hidden="true"
                            />
                            {color}
                        </span>
                        <span className="text-slate-400">({colorCounts.get(color)})</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ProductColor