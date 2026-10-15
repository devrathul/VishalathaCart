import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import { useSelector } from 'react-redux'
import {useState} from 'react'
import { LiaSearchSolid } from "react-icons/lia";


const Products = () => {

    const [searchItem,setSearchItem] = useState('')
    const [sortOption, setSortOption] = useState('0')
    const productList = useSelector(state => state.productList.value)
    const selectedCategories = useSelector(state => state.productList.selectedCategories)
    const selectedPriceRange = useSelector(state => state.productList.selectedPriceRange)
    const selectedBrand = useSelector(state => state.productList.selectedBrand)
    const selectedRating = useSelector(state => state.productList.selectedRating)
    const selectedColors = useSelector(state => state.productList.selectedColors)

    const searchTerm = searchItem.trim().toLowerCase()

    const filteredProducts = productList.filter((product) => {
        const matchesSearch = !searchTerm || [
            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.sku,
            product.description
        ].some(value => String(value ?? '').toLowerCase().includes(searchTerm))

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

        const matchesPrice = !selectedPriceRange || (product.price >= selectedPriceRange.min && (selectedPriceRange.max === null || product.price < selectedPriceRange.max))

        const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(product.brand)

        const productRating = Number(product.rating)
        const matchesRating = selectedRating.length === 0
            || (Number.isFinite(productRating) && selectedRating.some(minRating => productRating >= minRating))

        const productColors = Array.isArray(product.colors) ? product.colors : []
        const matchesColor = selectedColors.length === 0
            || selectedColors.some(color => productColors.includes(color))

        return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesRating && matchesColor
    })

    const sortedProducts = [...filteredProducts].sort((productA, productB) => {
        const ratingA = Number(productA.rating)
        const ratingB = Number(productB.rating)
        const priceA = Number(productA.price)
        const priceB = Number(productB.price)

        switch (sortOption) {
            case '1':
                return ratingA - ratingB
            case '2':
                return ratingB - ratingA
            case '3':
                return Number(productB.id) - Number(productA.id)
            case '4':
                return priceA - priceB
            case '5':
                return priceB - priceA
            default:
                return Number(Boolean(productB.isBestSeller)) - Number(Boolean(productA.isBestSeller))
                    || ratingB - ratingA
        }
    })
    
    const onSearch = (event) => {
        setSearchItem(event.target.value)
    }

    const onSortChange = (event) => {
        setSortOption(event.target.value)
    }

    return (
        <>
            <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
                <button className="rounded-lg border border-[#b8d9f5] px-4 py-2 text-sm font-semibold text-[#0b4c8d]">☷ Filters</button>
                <select aria-label="Sort products" value={sortOption} onChange={onSortChange} className="rounded-lg border border-[#b8d9f5] bg-white px-3 py-2 text-sm font-semibold text-[#0b4c8d]">
                    <option value="0">Sort: Popular</option>
                    <option value="1">Rating: Low to High</option>
                    <option value="2">Rating: High to Low</option>
                    <option value="3">Newest</option>
                    <option value="4">Price: Low to High</option>
                    <option value="5">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[205px_1fr] xl:grid-cols-[225px_1fr] py-10">

                <ProductFilters />

                <section className="min-w-0">
                    <div className="mb-6 hidden items-center gap-4 lg:flex">
                        <div className="flex h-9 flex-1 items-center rounded-full border border-[#c4def5] px-3.5">
                            <LiaSearchSolid className="mr-2 text-xl text-[#003f88]" />
                            <input value={searchItem} onChange={onSearch} className="w-full text-xs outline-none" placeholder="Search products..." />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#0b315c]">
                            <span>Sort by:</span>
                            <select aria-label="Sort products" value={sortOption} onChange={onSortChange} className="h-9 w-32 rounded-lg border border-[#c4def5] bg-white px-3 font-semibold outline-none">
                                <option value="0">Popular</option>
                                <option value="1">Rating: Low to High</option>
                                <option value="2">Rating: High to Low</option>
                                <option value="3">Newest</option>
                                <option value="4">Price: Low to High</option>
                                <option value="5">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {sortedProducts.map((eachProduct) => <ProductCard products={eachProduct} key={eachProduct.id} />)}
                    </div>
                    {sortedProducts.length === 0 && (
                        <p className="py-12 text-center text-sm text-slate-500">
                            No products found. Try changing your search or filters.
                        </p>
                    )}
                </section>
            </div>
        </>
    )
}

export default Products