import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productsSlice'
import usersReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/authSlice'


export const store = configureStore({
  reducer: {
    productList: productReducer,
    users: usersReducer,
    auth: authReducer
  }
})
