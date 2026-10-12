import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
    name: 'wishlists',
    initialState: {
        value: []
    },
    reducers: {
        addToWishList: (state, action) => {
            const productId = action.payload
            if (!state.value.includes(productId)) {
                state.value.push(productId)
            }
        },
        removeFromWishList: (state, action) => {
            state.value = state.value.filter(productId => productId !== action.payload)
        },
        toggleWishlist: (state, action) => {
            const productId = action.payload
            state.value = state.value.includes(productId)
                ? state.value.filter(id => id !== productId)
                : [...state.value, productId]
        }
    }
})

export const { addToWishList, removeFromWishList, toggleWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer