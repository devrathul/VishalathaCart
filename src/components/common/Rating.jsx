import { FaStar } from "react-icons/fa"

const Rating = ({ rating }) => {
    const numericRating = Number(rating)
    const normalizedRating = Number.isFinite(numericRating)
        ? Math.min(5, Math.max(0, numericRating))
        : 0

    return (
        <span
            className="flex items-center text-[18px] leading-none"
            role="img"
            aria-label={`${normalizedRating} out of 5 stars`}
        >
            {Array.from({ length: 5 }, (_, index) => {
                const fill = Math.min(1, Math.max(0, normalizedRating - index)) * 100

                return (
                    <span className="relative" key={index} aria-hidden="true">
                        <FaStar className="text-slate-400" />
                        <FaStar
                            className="absolute inset-0 text-amber-400"
                            style={{ clipPath: `inset(0 ${100 - fill}% 0 0)` }}
                        />
                    </span>
                )
            })}
        </span>
    )
}

export default Rating