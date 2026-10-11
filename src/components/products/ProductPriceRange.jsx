import { useDispatch, useSelector } from 'react-redux'
import { togglePrice } from '../../features/products/productsSlice'

const ProductPriceRange = () => {

    const priceRanges = [
        { label: "Under ₹1,000", min: 0, max: 1000 },
        { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
        { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
        { label: "₹10,000 - ₹20,000", min: 10000, max: 20000 },
        { label: "Over ₹20,000", min: 20000, max: null },
    ];

    const dispatch = useDispatch()
    const selectedPriceRange = useSelector(state => state.productList.selectedPriceRange)

    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">
                <span>Price</span>
            </div>
            <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                    <button
                        key={range.label}
                        type="button"
                        onClick={() => dispatch(togglePrice({ min: range.min, max: range.max }))}
                        className={`w-fit pl-1 text-left text-sm transition-colors duration-200 ${selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max
                            ? "font-semibold text-[#124477]"
                            : "text-black hover:text-[#124477]"
                            }`}
                    >
                        {range.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductPriceRange