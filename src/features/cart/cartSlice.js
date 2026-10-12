import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {

        },
        removeFromCart: (state, action) => {

        },
        removeAllFromCart: (state, action) => {

        }
    }
})

export const {addToCart,removeFromCart,removeAllFromCart} = cartSlice.actions

export default cartSlice.reducer