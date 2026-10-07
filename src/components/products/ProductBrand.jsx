const ProductBrand = () => {
    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Brand <span>⌃</span></div>
            <div className="space-y-2.5 text-xs text-[#164c85]">
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><input type="checkbox" className="accent-[#087ff5]" /> Apple</span><span className="text-slate-400">(8)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><input type="checkbox" className="accent-[#087ff5]" /> Samsung</span><span className="text-slate-400">(6)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><input type="checkbox" className="accent-[#087ff5]" /> Sony</span><span className="text-slate-400">(4)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><input type="checkbox" className="accent-[#087ff5]" /> Dell</span><span className="text-slate-400">(3)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><input type="checkbox" className="accent-[#087ff5]" /> HP</span><span className="text-slate-400">(3)</span></label>
            </div>
            <button className="mt-3 text-[11px] font-semibold text-brand-600">Show More⌄</button>
        </div>
    )
}

export default ProductBrand