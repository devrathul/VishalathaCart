import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CategoryCard from './components/category/CategoryCard'

function App() {
  return (
    <>
      <Header />
      <div className='max-w-310 mx-auto px-4'>
        <CategoryCard />
      </div>
      <Footer />
    </>
  )
}

export default App
