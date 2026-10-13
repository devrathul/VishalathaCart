const categoryImages = import.meta.glob('../../assets/images/**/*', {
    eager: true,
    query: '?url',
    import: 'default',
})


const CategoryCard = (props) => {
    const { category } = props
    const imageUrl = category.image?.startsWith('/')
        ? category.image
        : categoryImages[`../../assets/images/${category.image}`]
    return (
        <div className='p-4'>
            <div className="card rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                <img src={imageUrl} alt={category.categoryName} title={category.categoryName} />
                <h3 className="font-semibold text-md text-center mt-2">{category.categoryName}</h3>
            </div>
        </div>
    )
}

export default CategoryCard