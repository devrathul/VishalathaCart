import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productsSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/categories/categoriesSlice'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import cartsReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    productList: productReducer,
    users: usersReducer,
    auth: authReducer,
    categories: categoryReducer,
    wishlists: wishlistReducer,
    carts: cartsReducer
  }
})
