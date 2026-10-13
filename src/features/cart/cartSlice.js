import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const quantity = product.quantity ?? 1
            const cartItem = state.value.find(item => item.id === product.id)

            if (cartItem) {
                cartItem.quantity += quantity
            } else {
                state.value.push({ ...product, quantity })
            }
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(product => product.id !== action.payload)
        },
        removeAllFromCart: state => {
            state.value = []
        }
    }
})

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions

export default cartSlice.reducer