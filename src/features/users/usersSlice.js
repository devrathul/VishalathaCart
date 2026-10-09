import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const userList = [
    {
        "id": uuidv4(),
        "firstName": "Admin",
        "lastName": "User",
        "email": "admin@vishalathacart.com",
        "phone": "+91 9000000000",
        "password": "admin123",
        "role": "admin",
        "status": "active",
        "profile": {
            "avatar": "",
            "gender": null,
            "dateOfBirth": null,
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "postalCode": "",
                "country": ""
            },
            "wishlist": [],
            "cartId": "",
            "orderIds": []
        }
    },
    {
        "id": uuidv4(),
        "firstName": "Rahul",
        "lastName": "Kumar",
        "email": "rahul@gmail.com",
        "phone": "+91 9876543210",
        "password": "rahul123",
        "role": "customer",
        "status": "active",
        "profile": {
            "avatar": "",
            "gender": null,
            "dateOfBirth": null,
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "postalCode": "",
                "country": ""
            },
            "wishlist": [],
            "cartId": "",
            "orderIds": []
        }
    }
]

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: userList,
    },
    reducers: {
        setUsers: (state, action) => {
            state.value = [...state.value, action.payload]
        },
    },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer