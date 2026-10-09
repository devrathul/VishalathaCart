import { createSlice } from '@reduxjs/toolkit'

const userList = [
    {
        "id": "USR-1001",
        "firstName": "Admin",
        "lastName": "User",
        "email": "admin@vishalathacart.com",
        "phone": "+91 9000000000",
        "password": "admin123",
        "role": "admin",
        "status": "active",
        "emailVerified": true,
        "phoneVerified": true,
        "avatar": "/images/users/admin.jpg",
        "createdAt": "2026-01-01T08:00:00Z",
        "lastLoginAt": "2026-10-08T18:30:00Z"
    },
    {
        "id": "USR-1002",
        "firstName": "Anjali",
        "lastName": "Nair",
        "email": "anjali@example.com",
        "phone": "+91 9895012345",
        "password": "customer123",
        "role": "customer",
        "status": "active",
        "emailVerified": true,
        "phoneVerified": true,
        "avatar": "/images/users/anjali.jpg",
        "createdAt": "2026-09-22T08:15:00Z",
        "lastLoginAt": "2026-10-07T15:20:00Z"
    },
    {
        "id": "USR-1003",
        "firstName": "Arun",
        "lastName": "Thomas",
        "email": "arun@example.com",
        "phone": "+91 9847012345",
        "password": "seller123",
        "role": "seller",
        "status": "active",
        "emailVerified": true,
        "phoneVerified": true,
        "avatar": "/images/users/arun.jpg",
        "storeId": "STORE-1001",
        "createdAt": "2026-09-15T09:00:00Z",
        "lastLoginAt": "2026-10-08T09:10:00Z"
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