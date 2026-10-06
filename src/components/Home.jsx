import CategoryCard from './category/CategoryCard'
import ProductCard from './products/ProductCard'

const Home = () => {
    return(
        <>
          <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Category</h2>
          <CategoryCard />
          <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Product</h2>
          <ProductCard />
        </>
    )
}

export default Home