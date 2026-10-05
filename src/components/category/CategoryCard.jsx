import electronicImg from '../../assets/images/electronic.png'

const CategoryCard = () => {
    return (
        <>
        <h2 className='font-bold mt-8 mb-4 text-lg'>Shop By Category</h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mb-8 gap-10'>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Electronic</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Fashion</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Home & Living</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Beauty & Health</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Sports & Outdoors</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Toy & Games</h3>
            </div>
            <div className="card p-4 rounded-2xl shadow-2xl">
                <img src={electronicImg} alt="category" title="category" />
                <h3 className="font-semibold text-md text-center mt-2">Groceries</h3>
            </div>
        </div>
        </>
    )
}

export default CategoryCard