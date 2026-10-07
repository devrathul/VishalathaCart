import { createSlice } from '@reduxjs/toolkit'

const products = [
    {
        "id": 1,
        "name": "iPhone 17 Pro",
        "brand": "Apple",
        "category": "Electronics",
        "subcategory": "Smartphones",
        "price": 124900,
        "originalPrice": 149900,
        "discount": 17,
        "rating": 4.8,
        "reviewCount": 124,
        "stock": 25,
        "image": "iphone.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": true,
        "colors": ["Silver", "Black", "Blue", "Orange"],
        "storage": ["128GB", "256GB", "512GB", "1TB"],
        "description": "Premium smartphone with an advanced camera system, powerful processor and stunning display.",
        "specifications": {
            "display": "6.3-inch Super Retina XDR",
            "processor": "A19 Pro",
            "camera": "48MP Pro Camera System",
            "battery": "All-day battery life",
            "operatingSystem": "iOS 26"
        }
    },
    {
        "id": 2,
        "name": "MacBook Air 15-inch",
        "brand": "Apple",
        "category": "Electronics",
        "subcategory": "Laptops",
        "price": 99900,
        "originalPrice": 119900,
        "discount": 17,
        "rating": 4.7,
        "reviewCount": 98,
        "stock": 15,
        "image": "laptope.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": true,
        "colors": ["Silver", "Midnight", "Starlight"],
        "storage": ["256GB", "512GB", "1TB"],
        "description": "Slim and powerful laptop designed for productivity, creativity and everyday computing.",
        "specifications": {
            "display": "15.3-inch Liquid Retina",
            "processor": "Apple M4",
            "ram": "16GB",
            "storage": "512GB SSD",
            "battery": "Up to 18 hours"
        }
    },
    {
        "id": 3,
        "name": "Galaxy S25 Ultra",
        "brand": "Samsung",
        "category": "Electronics",
        "subcategory": "Smartphones",
        "price": 109999,
        "originalPrice": 129999,
        "discount": 15,
        "rating": 4.7,
        "reviewCount": 156,
        "stock": 30,
        "image": "iphone.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": true,
        "colors": ["Titanium Black", "Titanium Blue", "Titanium Silver"],
        "storage": ["256GB", "512GB", "1TB"],
        "description": "Flagship Android smartphone with a high-resolution camera and premium titanium design.",
        "specifications": {
            "display": "6.9-inch Dynamic AMOLED 2X",
            "processor": "Snapdragon 8 Elite",
            "camera": "200MP Main Camera",
            "ram": "12GB",
            "battery": "5000mAh"
        }
    },
    {
        "id": 4,
        "name": "Sony WH-1000XM6",
        "brand": "Sony",
        "category": "Electronics",
        "subcategory": "Audio",
        "price": 34990,
        "originalPrice": 39990,
        "discount": 13,
        "rating": 4.6,
        "reviewCount": 98,
        "stock": 42,
        "image": "headphone.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": false,
        "colors": ["Black", "Silver"],
        "storage": [],
        "description": "Premium wireless headphones with industry-leading noise cancellation.",
        "specifications": {
            "type": "Over-ear",
            "noiseCancellation": "Active Noise Cancellation",
            "battery": "Up to 30 hours",
            "connectivity": "Bluetooth 5.3",
            "microphone": "Built-in"
        }
    },
    {
        "id": 5,
        "name": "Apple Watch Series 11",
        "brand": "Apple",
        "category": "Electronics",
        "subcategory": "Smart Watches",
        "price": 39900,
        "originalPrice": 44900,
        "discount": 11,
        "rating": 4.5,
        "reviewCount": 87,
        "stock": 20,
        "image": "watch.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": false,
        "colors": ["Black", "Silver", "Rose Gold"],
        "storage": ["64GB"],
        "description": "Smartwatch with health tracking, fitness features and seamless iPhone integration.",
        "specifications": {
            "display": "Always-On Retina Display",
            "waterResistance": "50 meters",
            "battery": "Up to 24 hours",
            "connectivity": "GPS + Cellular",
            "compatibility": "iPhone"
        }
    },
    {
        "id": 6,
        "name": "AirPods Pro 3",
        "brand": "Apple",
        "category": "Electronics",
        "subcategory": "Audio",
        "price": 24900,
        "originalPrice": 29900,
        "discount": 17,
        "rating": 4.6,
        "reviewCount": 142,
        "stock": 50,
        "image": "airpode.png",
        "isFeatured": true,
        "isNew": true,
        "isBestSeller": true,
        "colors": ["White"],
        "storage": [],
        "description": "Wireless earbuds featuring active noise cancellation and immersive audio.",
        "specifications": {
            "type": "In-ear",
            "noiseCancellation": "Active Noise Cancellation",
            "battery": "Up to 30 hours with case",
            "connectivity": "Bluetooth",
            "waterResistance": "IPX4"
        }
    },
    {
        "id": 8,
        "name": "Michael Kors Handbag",
        "brand": "Michael Kors",
        "category": "Fashion",
        "subcategory": "Bags",
        "price": 15999,
        "originalPrice": 19999,
        "discount": 20,
        "rating": 4.4,
        "reviewCount": 64,
        "stock": 18,
        "image": "fashion.png",
        "isFeatured": true,
        "isNew": false,
        "isBestSeller": false,
        "colors": ["Pink", "Black", "Brown"],
        "sizes": ["Medium"],
        "description": "Elegant handbag with a spacious interior and premium finish.",
        "specifications": {
            "material": "Leather",
            "closure": "Zip",
            "compartments": "3",
            "strap": "Adjustable",
            "style": "Handbag"
        }
    },
    {
        "id": 9,
        "name": "Adidas Running Shoes",
        "brand": "Adidas",
        "category": "Sports & Outdoors",
        "subcategory": "Footwear",
        "price": 5999,
        "originalPrice": 7999,
        "discount": 25,
        "rating": 4.3,
        "reviewCount": 76,
        "stock": 45,
        "image": "sports.png",
        "isFeatured": false,
        "isNew": true,
        "isBestSeller": false,
        "colors": ["White", "Black", "Blue"],
        "sizes": ["7", "8", "9", "10", "11"],
        "description": "Lightweight running shoes designed for comfort and everyday training.",
        "specifications": {
            "material": "Mesh",
            "sole": "Rubber",
            "closure": "Lace-up",
            "sport": "Running",
            "weight": "280g"
        }
    },
    {
        "id": 10,
        "name": "Dyson Air Purifier",
        "brand": "Dyson",
        "category": "Home & Living",
        "subcategory": "Home Appliances",
        "price": 45900,
        "originalPrice": 54900,
        "discount": 16,
        "rating": 4.6,
        "reviewCount": 54,
        "stock": 12,
        "image": "home.png",
        "isFeatured": false,
        "isNew": true,
        "isBestSeller": false,
        "colors": ["White", "Silver"],
        "description": "Advanced air purifier designed to remove pollutants and improve indoor air quality.",
        "specifications": {
            "coverage": "800 sq.ft",
            "filter": "HEPA + Carbon",
            "noiseLevel": "Low",
            "control": "App + Remote",
            "power": "56W"
        }
    },
    {
        "id": 11,
        "name": "Ceramic Plant Pot",
        "brand": "HomeDecor",
        "category": "Home & Living",
        "subcategory": "Home Decor",
        "price": 699,
        "originalPrice": 999,
        "discount": 30,
        "rating": 4.2,
        "reviewCount": 41,
        "stock": 100,
        "image": "home.png",
        "isFeatured": false,
        "isNew": false,
        "isBestSeller": false,
        "colors": ["White", "Green", "Grey"],
        "sizes": ["Small", "Medium", "Large"],
        "description": "Minimal ceramic planter suitable for indoor plants and modern home decor.",
        "specifications": {
            "material": "Ceramic",
            "finish": "Matte",
            "usage": "Indoor",
            "drainage": "Yes",
            "shape": "Round"
        }
    },
    {
        "id": 12,
        "name": "L'Oreal Revitalift Serum",
        "brand": "L'Oreal",
        "category": "Beauty & Health",
        "subcategory": "Skincare",
        "price": 1299,
        "originalPrice": 1699,
        "discount": 24,
        "rating": 4.4,
        "reviewCount": 89,
        "stock": 75,
        "image": "beauty.png",
        "isFeatured": false,
        "isNew": true,
        "isBestSeller": true,
        "colors": [],
        "sizes": ["30ml", "50ml"],
        "description": "Lightweight skincare serum formulated for a smooth and refreshed appearance.",
        "specifications": {
            "volume": "30ml",
            "skinType": "All Skin Types",
            "texture": "Serum",
            "usage": "Daily",
            "parabenFree": true
        }
    },
    {
        "id": 13,
        "name": "LEGO City Fire Station",
        "brand": "LEGO",
        "category": "Toys & Games",
        "subcategory": "Building Sets",
        "price": 4999,
        "originalPrice": 5999,
        "discount": 17,
        "rating": 4.8,
        "reviewCount": 112,
        "stock": 35,
        "image": "toyandgame.png",
        "isFeatured": false,
        "isNew": false,
        "isBestSeller": true,
        "colors": [],
        "sizes": [],
        "description": "Creative building set with vehicles, characters and an interactive fire station.",
        "specifications": {
            "pieces": "380+",
            "age": "6+",
            "material": "Plastic",
            "characters": "4",
            "theme": "City"
        }
    },
    {
        "id": 14,
        "name": "Organic Grocery Basket",
        "brand": "FreshMart",
        "category": "Groceries",
        "subcategory": "Organic Food",
        "price": 1499,
        "originalPrice": 1799,
        "discount": 17,
        "rating": 4.5,
        "reviewCount": 58,
        "stock": 40,
        "image": "groceries.png",
        "isFeatured": false,
        "isNew": false,
        "isBestSeller": true,
        "colors": [],
        "sizes": ["Small", "Medium", "Large"],
        "description": "Fresh selection of organic fruits, vegetables and everyday grocery essentials.",
        "specifications": {
            "type": "Organic",
            "items": "12+",
            "delivery": "Same Day",
            "packaging": "Eco Friendly",
            "origin": "Local Farms"
        }
    },
    {
        "id": 15,
        "name": "PlayStation 5 Slim",
        "brand": "Sony",
        "category": "Electronics",
        "subcategory": "Gaming",
        "price": 49990,
        "originalPrice": 54990,
        "discount": 9,
        "rating": 4.8,
        "reviewCount": 137,
        "stock": 22,
        "image": "playstation.png",
        "isFeatured": true,
        "isNew": false,
        "isBestSeller": true,
        "colors": ["White"],
        "storage": ["1TB"],
        "description": "Next-generation gaming console with fast loading, immersive graphics and a large game library.",
        "specifications": {
            "storage": "1TB SSD",
            "resolution": "Up to 4K",
            "frameRate": "Up to 120fps",
            "controller": "DualSense Wireless",
            "connectivity": "Wi-Fi 6"
        }
    }
]

export const productsSlice = createSlice({
    name: 'productList',
    initialState: {
        value: products,        
        selectedCategories: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        toggleCategory: (state, action) => {
            const category = action.payload
            state.selectedCategories = state.selectedCategories.includes(category)
                ? state.selectedCategories.filter(selectedCategory => selectedCategory !== category)
                : [...state.selectedCategories, category]
        },
        clearCategoryFilters: (state) => {
            state.selectedCategories = []
        }
    }
})

export const { addToCart, toggleCategory, clearCategoryFilters } = productsSlice.actions

export default productsSlice.reducer