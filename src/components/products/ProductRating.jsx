const ProductRating = () => {
    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Rating <span>⌃</span></div>
            <div className="space-y-2 text-[11px]">
                <label className="flex gap-2"><input type="checkbox" className="accent-[#087ff5]" /><span className="text-amber-500">★★★★★</span><span className="text-[#164c85]">& Up</span></label>
                <label className="flex gap-2"><input type="checkbox" className="accent-[#087ff5]" /><span className="text-amber-500">★★★★</span><span className="text-slate-300">★</span><span className="text-[#164c85]">& Up</span></label>
                <label className="flex gap-2"><input type="checkbox" className="accent-[#087ff5]" /><span className="text-amber-500">★★★</span><span className="text-slate-300">★★</span><span className="text-[#164c85]">& Up</span></label>
                <label className="flex gap-2"><input type="checkbox" className="accent-[#087ff5]" /><span className="text-amber-500">★★</span><span className="text-slate-300">★★★</span><span className="text-[#164c85]">& Up</span></label>
            </div>
        </div>
    )
}

export default ProductRating