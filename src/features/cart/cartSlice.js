import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItemInput = action.payload?.cartItems ?? action.payload
            if (!cartItemInput) return

            const productID = cartItemInput.productID ?? cartItemInput.id
            const quantity = Number(cartItemInput.quantity) > 0 ? Number(cartItemInput.quantity) : 1
            const existingItem = state.value.find(item => item.productID === productID)

            if (existingItem) {
                existingItem.quantity += quantity
            } else {
                state.value.push({
                    ...cartItemInput,
                    productID,
                    quantity,
                })
            }
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload
            state.value = state.value.filter(cartItems => cartItems.productID !== productIdToRemove && cartItems.id !== productIdToRemove)
        },
        removeAllFromCart: state => {
            state.value = []
        },
        addQuantity: (state, action) => {
            const cartItem = state.value.find(item => item.cartID === action.payload)
            if (cartItem) {
                cartItem.quantity = (cartItem.quantity ?? 1) + 1
            }
        },
        minusQuantity: (state, action) => {
            const cartItem = state.value.find(item => item.cartID === action.payload)
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1
            }
        }
    }
})

export const { addToCart, removeFromCart, removeAllFromCart, addQuantity, minusQuantity } = cartSlice.actions

export default cartSlice.reducer