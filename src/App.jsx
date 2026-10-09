import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root'
import { store } from './app/store'
import { Provider } from 'react-redux'

import Home from './components/Home'
import Products from './components/products/Products'
import ProductDetails from './components/products/ProductDetails'
import About from './components/common/About'
import ContactUs from './components/common/ContactUs'
import PageNotFound from './components/common/PageNotFound'
import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: Products },
      { path: "/product/:productId", Component: ProductDetails },
      { path: "/about", Component: About },
      { path: "/contact", Component: ContactUs },
      { path: "/login", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "*", Component: PageNotFound },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
