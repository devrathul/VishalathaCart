import electronicImg from '../../assets/images/electronic.png'

const CategoryCard = () => {
    return (
        <>
        <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Category</h2>
        <div className='grid grid-cols-6 mb-8 gap-5'>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
        </div>
        </>
    )
}

export default CategoryCard