const ProductColor = () => {
    return (
        <div className="py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Color <span>⌃</span></div>
            <div className="space-y-2.5 text-xs text-[#164c85]">
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-[#222]"></i>Black</span><span className="text-slate-400">(12)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full border border-slate-200 bg-white"></i>White</span><span className="text-slate-400">(8)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-blue-500"></i>Blue</span><span className="text-slate-400">(6)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-red-500"></i>Red</span><span className="text-slate-400">(5)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-slate-300"></i>Silver</span><span className="text-slate-400">(4)</span></label>
                <label className="flex items-center justify-between"><span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-green-500"></i>Green</span><span className="text-slate-400">(3)</span></label>
            </div>
            <button className="mt-3 text-[11px] font-semibold text-brand-600">Show More⌄</button>
        </div>
    )
}

export default ProductColor