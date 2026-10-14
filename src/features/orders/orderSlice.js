import { createSlice } from '@reduxjs/toolkit'

const ordersList = [
  {
    "id": "ORD-1001",
    "customerId": "USR-1002",
    "products": [
      {
        "productId": "PROD-1001",
        "quantity": 1,
        "price": 124900
      },
      {
        "productId": "PROD-1002",
        "quantity": 2,
        "price": 2499
      }
    ],
    "totalAmount": 129898,
    "paymentMethod": "UPI",
    "paymentStatus": "Paid",
    "deliveryStatus": "Delivered",
    "orderDate": "2026-10-10T10:24:00",
    "shippingAddress": {
      "street": "MG Road",
      "city": "Bengaluru",
      "state": "Karnataka",
      "postalCode": "560001",
      "country": "India"
    }
  },
  {
    "id": "ORD-1002",
    "customerId": "USR-1003",
    "products": [
      {
        "productId": "PROD-1003",
        "quantity": 1,
        "price": 3499
      }
    ],
    "totalAmount": 3499,
    "paymentMethod": "Credit Card",
    "paymentStatus": "Paid",
    "deliveryStatus": "Processing",
    "orderDate": "2026-10-09T16:15:00",
    "shippingAddress": {
      "street": "Anna Nagar",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "postalCode": "600040",
      "country": "India"
    }
  },
  {
    "id": "ORD-1003",
    "customerId": "USR-1004",
    "products": [
      {
        "productId": "PROD-1004",
        "quantity": 2,
        "price": 2499
      }
    ],
    "totalAmount": 4998,
    "paymentMethod": "COD",
    "paymentStatus": "Pending",
    "deliveryStatus": "Shipped",
    "orderDate": "2026-10-09T12:32:00",
    "shippingAddress": {
      "street": "Kochi City",
      "city": "Kochi",
      "state": "Kerala",
      "postalCode": "682001",
      "country": "India"
    }
  }
]

export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        value: ordersList,

    },
    reducers: {
        updateDeliveryStatus: (state, action) => {
            const { orderId, deliveryStatus } = action.payload
            const order = state.value.find((item) => item.id === orderId)

            if (order) {
                order.deliveryStatus = deliveryStatus
            }
        }
    }
})

export const { updateDeliveryStatus } = orderSlice.actions

export default orderSlice.reducer