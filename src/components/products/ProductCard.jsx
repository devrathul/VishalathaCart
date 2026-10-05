import iphoneImg from '../../assets/images/iphone.png'


const ProductCard = () => {
    return (
        <>
            <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Product</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mx-auto my-10'>
                <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50">
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            20% OFF
                        </span>
                        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                        <img
                            src={iphoneImg}
                            alt="iPhone 15 Pro"
                            className="h-45 w-45 object-contain"
                        />
                    </div>
                    <div className="px-2 pt-3">
                        <h3 className="text-lg font-bold text-[#092b62]">
                            iPhone 15 Pro
                        </h3>
                        <div className="mt-1 flex items-center gap-1">
                            <div className="flex text-[18px] leading-none text-amber-400">
                                ★ ★ ★ ★ ★
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-400">
                                (124)
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <span className="text-[21px] font-bold text-blue-600">
                                ₹99,900
                            </span>
                            <span className="text-base text-slate-400 line-through">
                                ₹1,24,900
                            </span>
                        </div>
                        <button
                            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600"
                        >
                            <span className="text-xl">🛒</span>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50">
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            20% OFF
                        </span>
                        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                        <img
                            src={iphoneImg}
                            alt="iPhone 15 Pro"
                            className="h-45 w-45 object-contain"
                        />
                    </div>
                    <div className="px-2 pt-3">
                        <h3 className="text-lg font-bold text-[#092b62]">
                            iPhone 15 Pro
                        </h3>
                        <div className="mt-1 flex items-center gap-1">
                            <div className="flex text-[18px] leading-none text-amber-400">
                                ★ ★ ★ ★ ★
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-400">
                                (124)
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <span className="text-[21px] font-bold text-blue-600">
                                ₹99,900
                            </span>
                            <span className="text-base text-slate-400 line-through">
                                ₹1,24,900
                            </span>
                        </div>
                        <button
                            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600"
                        >
                            <span className="text-xl">🛒</span>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50">
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            20% OFF
                        </span>
                        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                        <img
                            src={iphoneImg}
                            alt="iPhone 15 Pro"
                            className="h-45 w-45 object-contain"
                        />
                    </div>
                    <div className="px-2 pt-3">
                        <h3 className="text-lg font-bold text-[#092b62]">
                            iPhone 15 Pro
                        </h3>
                        <div className="mt-1 flex items-center gap-1">
                            <div className="flex text-[18px] leading-none text-amber-400">
                                ★ ★ ★ ★ ★
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-400">
                                (124)
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <span className="text-[21px] font-bold text-blue-600">
                                ₹99,900
                            </span>
                            <span className="text-base text-slate-400 line-through">
                                ₹1,24,900
                            </span>
                        </div>
                        <button
                            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600"
                        >
                            <span className="text-xl">🛒</span>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50">
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            20% OFF
                        </span>
                        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                        <img
                            src={iphoneImg}
                            alt="iPhone 15 Pro"
                            className="h-45 w-45 object-contain"
                        />
                    </div>
                    <div className="px-2 pt-3">
                        <h3 className="text-lg font-bold text-[#092b62]">
                            iPhone 15 Pro
                        </h3>
                        <div className="mt-1 flex items-center gap-1">
                            <div className="flex text-[18px] leading-none text-amber-400">
                                ★ ★ ★ ★ ★
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-400">
                                (124)
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <span className="text-[21px] font-bold text-blue-600">
                                ₹99,900
                            </span>
                            <span className="text-base text-slate-400 line-through">
                                ₹1,24,900
                            </span>
                        </div>
                        <button
                            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600"
                        >
                            <span className="text-xl">🛒</span>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                    <div className="relative flex h-62.5 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white to-slate-50">
                        <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            20% OFF
                        </span>
                        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                        <img
                            src={iphoneImg}
                            alt="iPhone 15 Pro"
                            className="h-45 w-45 object-contain"
                        />
                    </div>
                    <div className="px-2 pt-3">
                        <h3 className="text-lg font-bold text-[#092b62]">
                            iPhone 15 Pro
                        </h3>
                        <div className="mt-1 flex items-center gap-1">
                            <div className="flex text-[18px] leading-none text-amber-400">
                                ★ ★ ★ ★ ★
                            </div>
                            <span className="ml-2 text-sm font-medium text-slate-400">
                                (124)
                            </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <span className="text-[21px] font-bold text-blue-600">
                                ₹99,900
                            </span>
                            <span className="text-base text-slate-400 line-through">
                                ₹1,24,900
                            </span>
                        </div>
                        <button
                            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white transition hover:from-blue-700 hover:to-blue-600"
                        >
                            <span className="text-xl">🛒</span>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard