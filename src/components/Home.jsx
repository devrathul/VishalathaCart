import { useSelector } from 'react-redux'
import CategoryCard from './category/CategoryCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderModule from "react-slick";
import ProductCard from './products/ProductCard'

const Slider = SliderModule.default

const Home = () => {

    const categoriesList = useSelector(state => state.categories.value)
    const productList = useSelector(state => state.productList.value)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 564,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Category</h2>
            <div className='home-category-slider mb-8 w-full min-w-0'>
                <Slider {...settings}>
                    {categoriesList.map((eachcategory) => (<CategoryCard category={eachcategory} key={eachcategory.id} />))}
                </Slider>
            </div>
            <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {productList.map(eachProduct => {
                    if (eachProduct.isFeatured === true) {
                        return (<ProductCard products={eachProduct} key={eachProduct.id} />)
                    }
                })}
            </div>

        </>
    )
}

export default Home