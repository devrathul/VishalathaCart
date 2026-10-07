const PageNotFound = () => {
  return (
    <div className="py-8 h-[50vh]">   
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-4">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>    
    <p className="text-lg mb-4">
            Please check the URL or return to the <a href="/" className="text-blue-600 underline">home page</a>.
        </p>
    </div>
  )
}

export default PageNotFound