import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getStoredUser = () => {
    try {
        const profile = Cookies.get('loginProfile')
        return profile ? JSON.parse(profile) : null
    } catch {
        Cookies.remove('loginProfile')
        return null
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: getStoredUser(),
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        },
    },
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer