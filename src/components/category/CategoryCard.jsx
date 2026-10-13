import electronicImg from '../../assets/images/electronic.png'

const CategoryCard = (props) => {
    const { category } = props
    return (
        <div className='p-4'>
            <div className="card rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                <img src={electronicImg} alt={category.categoryName} title={category.categoryName} />
                <h3 className="font-semibold text-md text-center mt-2">{category.categoryName}</h3>
            </div>
        </div>
    )
}

export default CategoryCard