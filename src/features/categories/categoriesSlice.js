import { createSlice } from '@reduxjs/toolkit'

const categoriesList = [
    {
        "id": 1,
        "categoryName": "Electronics",
        "description": "Phones, computers, and electronic accessories",
        "status": "Active"
    },
    {
        "id": 2,
        "categoryName": "Fashion",
        "description": "Clothing, footwear, and accessories",
        "status": "Active"
    },
    {
        "id": 3,
        "categoryName": "Home & Living",
        "description": "Home decor, furniture, and household essentials",
        "status": "Active"
    },
    {
        "id": 4,
        "categoryName": "Beauty & Health",
        "description": "Skincare, cosmetics, and personal care products",
        "status": "Active"
    },
    {
        "id": 5,
        "categoryName": "Sports & Outdoors",
        "description": "Sports equipment and outdoor gear",
        "status": "Active"
    },
    {
        "id": 6,
        "categoryName": "Toys & Games",
        "description": "Toys, puzzles, and family games",
        "status": "Active"
    },
    {
        "id": 7,
        "categoryName": "Groceries",
        "description": "Everyday food and grocery essentials",
        "status": "Active"
    },
    {
        "id": 8,
        "categoryName": "Books",
        "description": "Books, stationery, and learning materials",
        "status": "InActive"
    }
]


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: categoriesList,

    },
    reducers: {
        addCategory: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeCategory: (state, action) => {
            const categoryID = action.payload
            state.value = state.value.filter(category => category.id !== categoryID)
        },
        editCategory: (state, action) => {
            const updatedCategory = action.payload
            const index = state.value.findIndex(category => category.id === updatedCategory.id)
            if (index !== -1) {
                state.value[index] = updatedCategory;
            }
        }
    }
})

export const { addCategory, removeCategory, editCategory } = categoriesSlice.actions

export default categoriesSlice.reducer