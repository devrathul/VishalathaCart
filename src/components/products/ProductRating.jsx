import Rating from '../common/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRating } from '../../features/products/productsSlice'

const ProductRating = () => {
    const dispatch = useDispatch()
    const selectedRating = useSelector(state => state.productList.selectedRating)

    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Rating <span>⌃</span></div>
            <div className="space-y-2 text-[11px]">
                {[5, 4, 3, 2].map(rating => (
                    <label className="flex gap-2" key={rating}>
                        <input
                            type="checkbox"
                            className="accent-[#087ff5]"
                            checked={selectedRating.includes(rating)}
                            onChange={() => dispatch(toggleRating(rating))}
                        />
                        <Rating rating={rating} />
                        <span className="text-[#164c85]">& Up</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ProductRating