import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CategoryCard from './components/category/CategoryCard'
import ProductCard from './components/products/ProductCard'

const productData = [
  {
    "id": "prod-101",
    "title": "AeroSound Pro Wireless Headphones",
    "brand": "AeroSound",
    "category": "Electronics",
    "subcategory": "Audio",
    "price": 129.99,
    "originalPrice": 179.99,
    "rating": 4.7,
    "reviewCount": 142,
    "popularityScore": 95,
    "isNew": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "description": "Premium active noise-canceling over-ear wireless headphones with spatial audio and 40-hour battery life.",
    "specifications": {
      "Battery Life": "40 Hours",
      "Noise Cancellation": "Active (ANC)",
      "Connectivity": "Bluetooth 5.3",
      "Weight": "250g",
      "Water Resistance": "IPX4",
      "Color": "Matte Black"
    },
    "aiTags": [
      "wireless",
      "noise cancelling",
      "over ear",
      "audio",
      "travel",
      "gym",
      "long battery"
    ],
    "priceHistory": [
      { "date": "2026-07-01", "price": 179.99 },
      { "date": "2026-08-01", "price": 159.99 },
      { "date": "2026-09-01", "price": 149.99 },
      { "date": "2026-10-01", "price": 129.99 }
    ],
    "priceDropPrediction": {
      "likelihood": "High",
      "predictedPrice": 99.99,
      "trend": "falling",
      "confidence": 0.88,
      "message": "Expected to drop by $30 during upcoming holiday sales."
    },
    "reviews": [
      {
        "id": "rev-1",
        "userName": "Alex Rivera",
        "rating": 5,
        "date": "2026-09-20",
        "comment": "The active noise cancellation is top-tier! Perfect for long flights."
      },
      {
        "id": "rev-2",
        "userName": "Sarah Jenkins",
        "rating": 4,
        "date": "2026-09-28",
        "comment": "Great sound quality, though the headband is a bit snug for long wear."
      }
    ]
  },
  {
    "id": "prod-102",
    "title": "NovaLite Ultrabook 14",
    "brand": "Nova Tech",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 899.00,
    "originalPrice": 899.00,
    "rating": 4.5,
    "reviewCount": 89,
    "popularityScore": 88,
    "isNew": true,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    "description": "Ultra-thin, lightweight laptop powered by a next-gen processor built for productivity and creative tasks.",
    "specifications": {
      "Processor": "Intel Core i7 13th Gen",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB NVMe SSD",
      "Display": "14-inch QHD OLED",
      "Weight": "1.1kg",
      "Battery Life": "14 Hours"
    },
    "aiTags": [
      "laptop",
      "ultrabook",
      "lightweight",
      "office",
      "student",
      "programming",
      "fast"
    ],
    "priceHistory": [
      { "date": "2026-08-15", "price": 899.00 },
      { "date": "2026-09-15", "price": 899.00 },
      { "date": "2026-10-01", "price": 899.00 }
    ],
    "priceDropPrediction": {
      "likelihood": "Low",
      "predictedPrice": 880.00,
      "trend": "stable",
      "confidence": 0.92,
      "message": "Price is stable; no major discounts anticipated soon."
    },
    "reviews": [
      {
        "id": "rev-3",
        "userName": "David Chen",
        "rating": 5,
        "date": "2026-09-15",
        "comment": "Blazing fast startup times and the OLED screen looks amazing."
      }
    ]
  },
  {
    "id": "prod-103",
    "title": "PulseFit Spark Smartwatch",
    "brand": "PulseFit",
    "category": "Wearables",
    "subcategory": "Smartwatches",
    "price": 69.50,
    "originalPrice": 99.00,
    "rating": 4.2,
    "reviewCount": 64,
    "popularityScore": 76,
    "isNew": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    "description": "Feature-packed fitness tracker with heart rate monitoring, sleep analysis, GPS tracking, and notifications.",
    "specifications": {
      "Display": "1.4-inch AMOLED Touch",
      "Battery Life": "7 Days",
      "Water Resistance": "5ATM (50m)",
      "Sensors": "Heart Rate, SpO2, GPS",
      "Compatibility": "iOS & Android",
      "Color": "Space Gray"
    },
    "aiTags": [
      "smartwatch",
      "fitness",
      "wearable",
      "heart rate",
      "budget",
      "sports",
      "waterproof"
    ],
    "priceHistory": [
      { "date": "2026-07-10", "price": 99.00 },
      { "date": "2026-08-20", "price": 84.99 },
      { "date": "2026-09-10", "price": 79.00 },
      { "date": "2026-10-02", "price": 69.50 }
    ],
    "priceDropPrediction": {
      "likelihood": "Medium",
      "predictedPrice": 59.99,
      "trend": "falling",
      "confidence": 0.75,
      "message": "Gradual price decay; minor drop expected next month."
    },
    "reviews": [
      {
        "id": "rev-4",
        "userName": "Emily Watson",
        "rating": 4,
        "date": "2026-09-02",
        "comment": "Solid smartwatch for the price point. GPS connects quickly."
      }
    ]
  },
  {
    "id": "prod-104",
    "title": "UrbanStride Ergonomic Backpack",
    "brand": "UrbanStride",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 49.99,
    "originalPrice": 49.99,
    "rating": 4.8,
    "reviewCount": 210,
    "popularityScore": 99,
    "isNew": true,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    "description": "Water-resistant commuter backpack with built-in USB charging port and padded laptop compartment up to 15.6 inches.",
    "specifications": {
      "Capacity": "25 Liters",
      "Material": "1680D Ballistic Nylon",
      "Laptop Pocket": "Fits up to 15.6 inches",
      "Water Resistance": "Water-repellent",
      "Weight": "850g",
      "Color": "Charcoal"
    },
    "aiTags": [
      "backpack",
      "travel",
      "laptop bag",
      "commute",
      "waterproof",
      "durable",
      "school"
    ],
    "priceHistory": [
      { "date": "2026-09-01", "price": 49.99 },
      { "date": "2026-09-15", "price": 49.99 },
      { "date": "2026-10-01", "price": 49.99 }
    ],
    "priceDropPrediction": {
      "likelihood": "Low",
      "predictedPrice": 49.99,
      "trend": "stable",
      "confidence": 0.95,
      "message": "Consistent price history; no price drops expected."
    },
    "reviews": [
      {
        "id": "rev-5",
        "userName": "Michael Brown",
        "rating": 5,
        "date": "2026-09-18",
        "comment": "Super comfortable even when fully packed. Lots of smart pockets."
      }
    ]
  }
]

function App() {
  return (
    <>
      <Header />
      <div className='max-w-[1800px] mx-auto px-4'>
        <CategoryCard />
        <ProductCard />
      </div>
      <Footer />
    </>
  )
}

export default App
