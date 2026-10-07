import { Link } from "react-router"

const ProductCard = (props) => {

    const { products } = props

    return (
        <div className="w-full rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
            <Link to={`/product/${products.id}`} className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col h-75 items-center justify-center rounded-xl bg-gradient-to-b from-white to-slate-50 w-full">
                    <div className="flex justify-between w-full px-2">
                        <span className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white">
                            {products.discount}% OFF
                        </span>
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#092b62] shadow-sm"> ♡ </button>
                    </div>
                    <img
                        src={`../../src/assets/images/${products.image}`}
                        alt="iPhone 15 Pro"
                        className="h-45 w-45 object-contain"
                    />
                    <h3 className="text-lg font-bold text-[#092b62]">
                        {products.name}
                    </h3>
                </div>
            </Link>
            <div className="px-2 pt-3">

                <div className="mt-1 flex items-center gap-1">
                    <div className="flex text-[18px] leading-none text-amber-400">
                        ★ ★ ★ ★ ★
                    </div>
                    <span className="ml-2 text-sm font-medium text-slate-400">
                        ({products.reviewCount})
                    </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-[21px] font-bold text-blue-600">
                        ₹{products.price}
                    </span>
                    <span className="text-base text-slate-400 line-through">
                        ₹{products.originalPrice}
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
    )
}

export default ProductCard