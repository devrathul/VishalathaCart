const ProductPriceRange = () => {
    return (
        <div className="border-b border-slate-100 py-4">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#124477]">Price Range <span>⌃</span></div>
            <input type="range" min="0" max="100000" value="100000" className="w-full" />
            <div className="mt-1 flex justify-between text-[10px] text-[#164c85]"><span>₹0</span><span>₹100,000</span></div>
        </div>
    )
}

export default ProductPriceRange