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
import AdminRoot from './Root/AdminRoot'
import AdminProduct from './components/admin/AdminProduct'
import AdminCategories from './components/admin/AdminCategories'
import AdminCustomers from './components/admin/AdminCustomers'
import AdminOrders from './components/admin/AdminOrders'
import AddProduct from './components/admin/AddProduct'  
import AdminProfile from './components/admin/AdminProfile'
import Wishlist from './components/wishlist/Wishlist'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: Products },
      { path: "/product/:productId", Component: ProductDetails },
      { path: "/wishlist", Component: Wishlist },
      { path: "/about", Component: About },
      { path: "/contact", Component: ContactUs },
      { path: "/login", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "*", Component: PageNotFound },
    ],
  },
  {
    path: "/admin",
    Component: AdminRoot,
    children: [
      { index: true, Component: AdminProfile },
      { path: "products", Component: AdminProduct },
      { path: "categories", Component: AdminCategories },
      { path: "customers", Component: AdminCustomers },
      { path: "orders", Component: AdminOrders },
      { path: "products/add", Component: AddProduct },
      { path: "product/:productId", Component: AddProduct },
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
