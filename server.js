const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    title: "Apple iPhone 13 (128GB) - Midnight",
    brand: "Apple",
    category: "mobile",
    price: 59999,
    discountPercentage: 12,
    discountedPrice: 52799,
    stock: 18,
    rating: 4.6,
    description: "6.1-inch Super Retina display with A15 Bionic chip and dual 12MP camera system.",
    thumbnail: "https://via.placeholder.com/300?text=iPhone+13"
  },
  {
    id: 2,
    title: "Samsung Galaxy M14 5G (6GB RAM)",
    brand: "Samsung",
    category: "mobile",
    price: 14999,
    discountPercentage: 10,
    discountedPrice: 13499,
    stock: 35,
    rating: 4.3,
    description: "6000mAh battery smartphone with 50MP triple camera and smooth 90Hz display.",
    thumbnail: "https://via.placeholder.com/300?text=Galaxy+M14"
  },
  {
    id: 3,
    title: "HP 15s Ryzen 5 Laptop (16GB/512GB SSD)",
    brand: "HP",
    category: "laptop",
    price: 54999,
    discountPercentage: 15,
    discountedPrice: 46749,
    stock: 12,
    rating: 4.4,
    description: "15.6-inch FHD laptop with AMD Ryzen 5 processor, fast SSD storage and Windows 11.",
    thumbnail: "https://via.placeholder.com/300?text=HP+15s"
  },
  {
    id: 4,
    title: "Sony WH-CH720N Wireless Headphones",
    brand: "Sony",
    category: "headphone",
    price: 9999,
    discountPercentage: 20,
    discountedPrice: 7999,
    stock: 40,
    rating: 4.5,
    description: "Noise cancelling wireless headphones with 35-hour battery backup.",
    thumbnail: "https://via.placeholder.com/300?text=Sony+CH720N"
  },
  {
    id: 5,
    title: "Nike Revolution 6 Running Shoes",
    brand: "Nike",
    category: "shoes",
    price: 4499,
    discountPercentage: 18,
    discountedPrice: 3689,
    stock: 50,
    rating: 4.2,
    description: "Lightweight and breathable running shoes designed for daily training.",
    thumbnail: "https://via.placeholder.com/300?text=Nike+Revolution+6"
  },




  {
    id: 6,
    title: "Dell Inspiron 14 Intel i5 (12th Gen)",
    brand: "Dell",
    category: "laptop",
    price: 62999,
    discountPercentage: 14,
    discountedPrice: 54179,
    stock: 16,
    rating: 4.3,
    description: "14-inch Full HD laptop powered by Intel Core i5 12th Gen processor with 512GB SSD.",
    thumbnail: "https://via.placeholder.com/300?text=Dell+Inspiron+14"
  },
  {
    id: 7,
    title: "Boat Airdopes 141 Bluetooth Earbuds",
    brand: "Boat",
    category: "headphone",
    price: 1999,
    discountPercentage: 25,
    discountedPrice: 1499,
    stock: 60,
    rating: 4.1,
    description: "True wireless earbuds with 42-hour battery backup and IPX4 water resistance.",
    thumbnail: "https://via.placeholder.com/300?text=Boat+Airdopes+141"
  },
  {
    id: 8,
    title: "Apple Watch SE (2nd Gen)",
    brand: "Apple",
    category: "watch",
    price: 29999,
    discountPercentage: 10,
    discountedPrice: 26999,
    stock: 22,
    rating: 4.7,
    description: "Advanced fitness tracking smartwatch with Retina display and crash detection.",
    thumbnail: "https://via.placeholder.com/300?text=Apple+Watch+SE"
  },
  {
    id: 9,
    title: "Adidas Ultraboost 22 Running Shoes",
    brand: "Adidas",
    category: "shoes",
    price: 11999,
    discountPercentage: 20,
    discountedPrice: 9599,
    stock: 28,
    rating: 4.6,
    description: "Premium running shoes with responsive Boost cushioning and breathable upper.",
    thumbnail: "https://via.placeholder.com/300?text=Adidas+Ultraboost+22"
  },
  {
    id: 10,
    title: "Samsung 55-inch 4K Smart LED TV",
    brand: "Samsung",
    category: "electronics",
    price: 54999,
    discountPercentage: 18,
    discountedPrice: 45099,
    stock: 9,
    rating: 4.5,
    description: "Ultra HD 4K Smart TV with HDR support and built-in streaming apps.",
    thumbnail: "https://via.placeholder.com/300?text=Samsung+4K+TV"
  },





  {
    id: 11,
    title: "Lenovo IdeaPad Slim 3 Ryzen 7",
    brand: "Lenovo",
    category: "laptop",
    price: 68999,
    discountPercentage: 16,
    discountedPrice: 57959,
    stock: 14,
    rating: 4.4,
    description: "15.6-inch FHD laptop powered by AMD Ryzen 7 processor with 16GB RAM and 512GB SSD.",
    thumbnail: "https://via.placeholder.com/300?text=Lenovo+IdeaPad+Slim+3"
  },
  {
    id: 12,
    title: "Realme Narzo 60 Pro 5G",
    brand: "Realme",
    category: "mobile",
    price: 23999,
    discountPercentage: 12,
    discountedPrice: 21119,
    stock: 33,
    rating: 4.2,
    description: "Curved AMOLED display smartphone with Dimensity processor and 100MP camera.",
    thumbnail: "https://via.placeholder.com/300?text=Realme+Narzo+60+Pro"
  },
  {
    id: 13,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "electronics",
    price: 11999,
    discountPercentage: 22,
    discountedPrice: 9359,
    stock: 26,
    rating: 4.6,
    description: "Waterproof portable Bluetooth speaker with powerful bass and 12-hour playtime.",
    thumbnail: "https://via.placeholder.com/300?text=JBL+Flip+6"
  },
  {
    id: 14,
    title: "Puma RS-X Sneakers",
    brand: "Puma",
    category: "shoes",
    price: 8999,
    discountPercentage: 19,
    discountedPrice: 7289,
    stock: 31,
    rating: 4.3,
    description: "Stylish and comfortable sneakers with cushioned sole for all-day wear.",
    thumbnail: "https://via.placeholder.com/300?text=Puma+RS-X"
  },
  {
    id: 15,
    title: "Noise ColorFit Pro 4 Smartwatch",
    brand: "Noise",
    category: "watch",
    price: 3999,
    discountPercentage: 25,
    discountedPrice: 2999,
    stock: 45,
    rating: 4.1,
    description: "Smartwatch with 1.72-inch display, health tracking features and Bluetooth calling.",
    thumbnail: "https://via.placeholder.com/300?text=Noise+ColorFit+Pro+4"
  },



  {
    id: 16,
    title: "Asus VivoBook 15 OLED",
    brand: "Asus",
    category: "laptop",
    price: 75999,
    discountPercentage: 17,
    discountedPrice: 63079,
    stock: 11,
    rating: 4.5,
    description: "15.6-inch OLED display laptop with Intel i7 processor and ultra-slim design.",
    thumbnail: "https://via.placeholder.com/300?text=Asus+VivoBook+15+OLED"
  },
  {
    id: 17,
    title: "OnePlus Nord CE 3 5G",
    brand: "OnePlus",
    category: "mobile",
    price: 26999,
    discountPercentage: 13,
    discountedPrice: 23489,
    stock: 29,
    rating: 4.4,
    description: "120Hz AMOLED display smartphone with Snapdragon processor and 50MP camera.",
    thumbnail: "https://via.placeholder.com/300?text=OnePlus+Nord+CE+3"
  },
  {
    id: 18,
    title: "Sony Bravia 43-inch 4K Ultra HD Smart TV",
    brand: "Sony",
    category: "electronics",
    price: 48999,
    discountPercentage: 15,
    discountedPrice: 41649,
    stock: 8,
    rating: 4.7,
    description: "4K Ultra HD Smart LED TV with Google TV support and Dolby Audio.",
    thumbnail: "https://via.placeholder.com/300?text=Sony+Bravia+43+4K"
  },
  {
    id: 19,
    title: "Nike Air Zoom Pegasus 39",
    brand: "Nike",
    category: "shoes",
    price: 10499,
    discountPercentage: 18,
    discountedPrice: 8609,
    stock: 37,
    rating: 4.6,
    description: "Responsive running shoes with lightweight mesh upper and Zoom Air cushioning.",
    thumbnail: "https://via.placeholder.com/300?text=Nike+Pegasus+39"
  },
  {
    id: 20,
    title: "Boat Xtend Smartwatch with Alexa Built-in",
    brand: "Boat",
    category: "watch",
    price: 3499,
    discountPercentage: 21,
    discountedPrice: 2764,
    stock: 52,
    rating: 4.2,
    description: "Smartwatch with built-in Alexa, heart rate monitor and 7-day battery life.",
    thumbnail: "https://via.placeholder.com/300?text=Boat+Xtend+Alexa"
  },



  {
    id: 21,
    title: "LG 260L Double Door Refrigerator",
    brand: "LG",
    category: "appliances",
    price: 28999,
    discountPercentage: 18,
    discountedPrice: 23779,
    stock: 7,
    rating: 4.4,
    description: "Frost-free double door refrigerator with smart inverter compressor and toughened glass shelves.",
    thumbnail: "https://via.placeholder.com/300?text=LG+Refrigerator+260L"
  },
  {
    id: 22,
    title: "Canon EOS 1500D DSLR Camera",
    brand: "Canon",
    category: "electronics",
    price: 42999,
    discountPercentage: 14,
    discountedPrice: 36979,
    stock: 13,
    rating: 4.6,
    description: "24.1MP DSLR camera with WiFi support and Full HD video recording capability.",
    thumbnail: "https://via.placeholder.com/300?text=Canon+EOS+1500D"
  },
  {
    id: 23,
    title: "Mi 10000mAh Power Bank 3i",
    brand: "Xiaomi",
    category: "electronics",
    price: 1499,
    discountPercentage: 20,
    discountedPrice: 1199,
    stock: 70,
    rating: 4.3,
    description: "Compact power bank with dual USB output and fast charging support.",
    thumbnail: "https://via.placeholder.com/300?text=Mi+Power+Bank+10000mAh"
  },
  {
    id: 24,
    title: "Adidas Essentials Men's Track Suit",
    brand: "Adidas",
    category: "clothes",
    price: 4999,
    discountPercentage: 22,
    discountedPrice: 3899,
    stock: 41,
    rating: 4.2,
    description: "Comfortable sports track suit made with breathable fabric for daily workouts.",
    thumbnail: "https://via.placeholder.com/300?text=Adidas+Track+Suit"
  },
  {
    id: 25,
    title: "Philips Air Fryer HD9200",
    brand: "Philips",
    category: "appliances",
    price: 9999,
    discountPercentage: 19,
    discountedPrice: 8099,
    stock: 19,
    rating: 4.5,
    description: "Healthy air fryer with Rapid Air technology for crispy and oil-free cooking.",
    thumbnail: "https://via.placeholder.com/300?text=Philips+Air+Fryer"
  },



  {
    id: 26,
    title: "Redmi Note 13 Pro 5G",
    brand: "Xiaomi",
    category: "mobile",
    price: 24999,
    discountPercentage: 15,
    discountedPrice: 21249,
    stock: 34,
    rating: 4.3,
    description: "6.67-inch AMOLED display smartphone with 200MP camera and fast charging support.",
    thumbnail: "https://via.placeholder.com/300?text=Redmi+Note+13+Pro"
  },
  {
    id: 27,
    title: "Acer Aspire 7 Gaming Laptop",
    brand: "Acer",
    category: "laptop",
    price: 72999,
    discountPercentage: 18,
    discountedPrice: 59859,
    stock: 10,
    rating: 4.5,
    description: "Gaming laptop with Ryzen 5 processor, RTX graphics and 144Hz display.",
    thumbnail: "https://via.placeholder.com/300?text=Acer+Aspire+7"
  },
  {
    id: 28,
    title: "Samsung 28L Convection Microwave Oven",
    brand: "Samsung",
    category: "appliances",
    price: 13499,
    discountPercentage: 20,
    discountedPrice: 10799,
    stock: 15,
    rating: 4.4,
    description: "Convection microwave oven with multiple cooking modes and auto-cook menu.",
    thumbnail: "https://via.placeholder.com/300?text=Samsung+Microwave+28L"
  },
  {
    id: 29,
    title: "Fossil Gen 6 Smartwatch",
    brand: "Fossil",
    category: "watch",
    price: 22999,
    discountPercentage: 17,
    discountedPrice: 19089,
    stock: 18,
    rating: 4.2,
    description: "Stylish smartwatch with Wear OS, heart rate tracking and fast charging support.",
    thumbnail: "https://via.placeholder.com/300?text=Fossil+Gen+6"
  },
  {
    id: 30,
    title: "Levi's Men's Slim Fit Jeans",
    brand: "Levi's",
    category: "clothes",
    price: 2999,
    discountPercentage: 25,
    discountedPrice: 2249,
    stock: 56,
    rating: 4.3,
    description: "Comfortable slim fit denim jeans with stretchable fabric and modern design.",
    thumbnail: "https://via.placeholder.com/300?text=Levis+Slim+Fit+Jeans"
  },




  {
    id: 31,
    title: "OnePlus 11R 5G (16GB RAM, 256GB)",
    brand: "OnePlus",
    category: "mobile",
    price: 39999,
    discountPercentage: 14,
    discountedPrice: 34399,
    stock: 27,
    rating: 4.5,
    description: "120Hz AMOLED display smartphone powered by Snapdragon processor with 100W fast charging.",
    thumbnail: "https://via.placeholder.com/300?text=OnePlus+11R"
  },
  {
    id: 32,
    title: "MSI GF63 Thin Gaming Laptop",
    brand: "MSI",
    category: "laptop",
    price: 79999,
    discountPercentage: 16,
    discountedPrice: 67199,
    stock: 9,
    rating: 4.6,
    description: "Gaming laptop with Intel i7 processor, RTX graphics and 144Hz IPS display.",
    thumbnail: "https://via.placeholder.com/300?text=MSI+GF63+Gaming"
  },
  {
    id: 33,
    title: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",
    category: "headphone",
    price: 24999,
    discountPercentage: 12,
    discountedPrice: 21999,
    stock: 21,
    rating: 4.8,
    description: "Active Noise Cancellation earbuds with spatial audio and MagSafe charging case.",
    thumbnail: "https://via.placeholder.com/300?text=AirPods+Pro+2"
  },
  {
    id: 34,
    title: "Nike Dri-FIT Men's Sports T-Shirt",
    brand: "Nike",
    category: "clothes",
    price: 1999,
    discountPercentage: 20,
    discountedPrice: 1599,
    stock: 48,
    rating: 4.4,
    description: "Breathable sports t-shirt made with sweat-wicking Dri-FIT technology.",
    thumbnail: "https://via.placeholder.com/300?text=Nike+Dri-FIT+Tshirt"
  },
  {
    id: 35,
    title: "Sony PlayStation 5 Console",
    brand: "Sony",
    category: "gaming",
    price: 54990,
    discountPercentage: 10,
    discountedPrice: 49491,
    stock: 6,
    rating: 4.9,
    description: "Next-gen gaming console with ultra-high speed SSD and stunning 4K graphics.",
    thumbnail: "https://via.placeholder.com/300?text=PlayStation+5"
  },



  {
    id: 36,
    title: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    category: "electronics",
    price: 36999,
    discountPercentage: 15,
    discountedPrice: 31449,
    stock: 17,
    rating: 4.5,
    description: "Powerful Android tablet with immersive display and long-lasting battery life.",
    thumbnail: "https://via.placeholder.com/300?text=Galaxy+Tab+S9+FE"
  },
  {
    id: 37,
    title: "HP Smart Tank 580 All-in-One Printer",
    brand: "HP",
    category: "electronics",
    price: 15999,
    discountPercentage: 18,
    discountedPrice: 13119,
    stock: 23,
    rating: 4.3,
    description: "High-capacity ink tank printer with wireless connectivity and low-cost printing.",
    thumbnail: "https://via.placeholder.com/300?text=HP+Smart+Tank+580"
  },
  {
    id: 38,
    title: "Adidas Men's Running Shorts",
    brand: "Adidas",
    category: "clothes",
    price: 2499,
    discountPercentage: 22,
    discountedPrice: 1949,
    stock: 39,
    rating: 4.2,
    description: "Lightweight and breathable running shorts designed for maximum comfort.",
    thumbnail: "https://via.placeholder.com/300?text=Adidas+Running+Shorts"
  },
  {
    id: 39,
    title: "Boat Stone 1200 Bluetooth Speaker",
    brand: "Boat",
    category: "electronics",
    price: 6999,
    discountPercentage: 20,
    discountedPrice: 5599,
    stock: 32,
    rating: 4.4,
    description: "Portable Bluetooth speaker with 14W output and IPX7 waterproof rating.",
    thumbnail: "https://via.placeholder.com/300?text=Boat+Stone+1200"
  },
  {
    id: 40,
    title: "Titan Karishma Analog Men's Watch",
    brand: "Titan",
    category: "watch",
    price: 4999,
    discountPercentage: 17,
    discountedPrice: 4149,
    stock: 26,
    rating: 4.3,
    description: "Elegant stainless steel analog watch with durable mineral glass dial.",
    thumbnail: "https://via.placeholder.com/300?text=Titan+Karishma+Watch"
  },



  {
    id: 41,
    title: "LG 1.5 Ton 5 Star Inverter Split AC",
    brand: "LG",
    category: "appliances",
    price: 45999,
    discountPercentage: 18,
    discountedPrice: 37719,
    stock: 8,
    rating: 4.6,
    description: "Energy-efficient inverter split AC with fast cooling and low noise operation.",
    thumbnail: "https://via.placeholder.com/300?text=LG+1.5+Ton+AC"
  },
  {
    id: 42,
    title: "Canon PIXMA E477 All-in-One Inkjet Printer",
    brand: "Canon",
    category: "electronics",
    price: 6999,
    discountPercentage: 20,
    discountedPrice: 5599,
    stock: 19,
    rating: 4.2,
    description: "Compact wireless inkjet printer with print, scan and copy functionality.",
    thumbnail: "https://via.placeholder.com/300?text=Canon+PIXMA+E477"
  },
  {
    id: 43,
    title: "Puma Men's Casual Sneakers",
    brand: "Puma",
    category: "shoes",
    price: 3999,
    discountPercentage: 25,
    discountedPrice: 2999,
    stock: 44,
    rating: 4.3,
    description: "Stylish and comfortable sneakers perfect for everyday casual wear.",
    thumbnail: "https://via.placeholder.com/300?text=Puma+Casual+Sneakers"
  },
  {
    id: 44,
    title: "Mi 32-inch HD Ready Smart TV",
    brand: "Xiaomi",
    category: "electronics",
    price: 14999,
    discountPercentage: 15,
    discountedPrice: 12749,
    stock: 21,
    rating: 4.4,
    description: "Smart LED TV with PatchWall interface and built-in streaming apps.",
    thumbnail: "https://via.placeholder.com/300?text=Mi+32+Smart+TV"
  },
  {
    id: 45,
    title: "Fastrack Reflex Play Smartwatch",
    brand: "Fastrack",
    category: "watch",
    price: 7995,
    discountPercentage: 22,
    discountedPrice: 6236,
    stock: 30,
    rating: 4.1,
    description: "Feature-rich smartwatch with AMOLED display and advanced fitness tracking.",
    thumbnail: "https://via.placeholder.com/300?text=Fastrack+Reflex+Play"
  },


  {
    id: 46,
    title: "Whirlpool 7 Kg Fully Automatic Washing Machine",
    brand: "Whirlpool",
    category: "appliances",
    price: 18999,
    discountPercentage: 17,
    discountedPrice: 15769,
    stock: 12,
    rating: 4.4,
    description: "Top load fully automatic washing machine with 6th Sense technology and quick wash feature.",
    thumbnail: "https://via.placeholder.com/300?text=Whirlpool+7Kg+Washing+Machine"
  },
  {
    id: 47,
    title: "Logitech MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "electronics",
    price: 9995,
    discountPercentage: 20,
    discountedPrice: 7996,
    stock: 25,
    rating: 4.8,
    description: "Premium ergonomic wireless mouse with ultra-fast scrolling and silent clicks.",
    thumbnail: "https://via.placeholder.com/300?text=Logitech+MX+Master+3S"
  },
  {
    id: 48,
    title: "Reebok Men's Training Shoes",
    brand: "Reebok",
    category: "shoes",
    price: 4999,
    discountPercentage: 24,
    discountedPrice: 3799,
    stock: 36,
    rating: 4.3,
    description: "Durable and lightweight training shoes designed for gym and daily workouts.",
    thumbnail: "https://via.placeholder.com/300?text=Reebok+Training+Shoes"
  },
  {
    id: 49,
    title: "Amazon Echo Dot (5th Gen) Smart Speaker",
    brand: "Amazon",
    category: "electronics",
    price: 5499,
    discountPercentage: 18,
    discountedPrice: 4509,
    stock: 40,
    rating: 4.6,
    description: "Smart speaker with Alexa voice assistant for music, smart home control and more.",
    thumbnail: "https://via.placeholder.com/300?text=Echo+Dot+5th+Gen"
  },
  {
    id: 50,
    title: "Ray-Ban UV Protected Sunglasses",
    brand: "Ray-Ban",
    category: "fashion",
    price: 7999,
    discountPercentage: 15,
    discountedPrice: 6799,
    stock: 18,
    rating: 4.5,
    description: "Stylish UV-protected sunglasses with premium frame and scratch-resistant lenses.",
    thumbnail: "https://via.placeholder.com/300?text=Ray-Ban+Sunglasses"
  },



  {
    id: 51,
    title: "Apple AirPods Pro (2nd Gen)",
    brand: "Apple",
    category: "electronics",
    price: 24999,
    discountPercentage: 10,
    discountedPrice: 22499,
    stock: 25,
    rating: 4.8,
    description: "Active Noise Cancellation with Transparency mode and spatial audio for immersive sound experience.",
    thumbnail: "https://via.placeholder.com/300?text=AirPods+Pro+2"
  },
  {
    id: 52,
    title: "Nike Air Max Running Shoes",
    brand: "Nike",
    category: "fashion",
    price: 12999,
    discountPercentage: 20,
    discountedPrice: 10399,
    stock: 40,
    rating: 4.6,
    description: "Comfortable and lightweight running shoes with breathable mesh and air cushioning sole.",
    thumbnail: "https://via.placeholder.com/300?text=Nike+Air+Max"
  },
  {
    id: 53,
    title: "Samsung 55-inch 4K Smart TV",
    brand: "Samsung",
    category: "electronics",
    price: 54999,
    discountPercentage: 18,
    discountedPrice: 45099,
    stock: 12,
    rating: 4.7,
    description: "Ultra HD 4K Smart TV with HDR support, built-in streaming apps, and crystal clear display.",
    thumbnail: "https://via.placeholder.com/300?text=Samsung+4K+TV"
  },
  {
    id: 54,
    title: "Wooden Study Table with Drawer",
    brand: "UrbanWood",
    category: "furniture",
    price: 8999,
    discountPercentage: 12,
    discountedPrice: 7919,
    stock: 15,
    rating: 4.4,
    description: "Durable wooden study table with smooth finish and spacious drawer for storage.",
    thumbnail: "https://via.placeholder.com/300?text=Study+Table"
  },
  {
    id: 55,
    title: "HP Pavilion 15 Laptop",
    brand: "HP",
    category: "electronics",
    price: 65999,
    discountPercentage: 14,
    discountedPrice: 56759,
    stock: 20,
    rating: 4.5,
    description: "Powerful laptop with Intel i5 processor, 16GB RAM, 512GB SSD and full HD display.",
    thumbnail: "https://via.placeholder.com/300?text=HP+Pavilion+15"
  },




  {
    id: 56,
    title: "Boat Rockerz 450 Bluetooth Headphones",
    brand: "Boat",
    category: "electronics",
    price: 3999,
    discountPercentage: 25,
    discountedPrice: 2999,
    stock: 60,
    rating: 4.3,
    description: "Wireless Bluetooth headphones with deep bass, 15 hours battery backup and comfortable ear cushions.",
    thumbnail: "https://via.placeholder.com/300?text=Boat+Rockerz+450"
  },
  {
    id: 57,
    title: "Adidas Classic Backpack",
    brand: "Adidas",
    category: "fashion",
    price: 2999,
    discountPercentage: 18,
    discountedPrice: 2459,
    stock: 35,
    rating: 4.4,
    description: "Spacious and durable backpack with padded straps, ideal for college and travel use.",
    thumbnail: "https://via.placeholder.com/300?text=Adidas+Backpack"
  },
  {
    id: 58,
    title: "LG 260L Double Door Refrigerator",
    brand: "LG",
    category: "appliances",
    price: 32999,
    discountPercentage: 12,
    discountedPrice: 29039,
    stock: 10,
    rating: 4.6,
    description: "Energy efficient double door refrigerator with smart inverter compressor and fast cooling technology.",
    thumbnail: "https://via.placeholder.com/300?text=LG+Refrigerator"
  },
  {
    id: 59,
    title: "Casio Analog-Digital Watch",
    brand: "Casio",
    category: "fashion",
    price: 5499,
    discountPercentage: 15,
    discountedPrice: 4674,
    stock: 28,
    rating: 4.5,
    description: "Stylish analog-digital watch with water resistance and long-lasting battery life.",
    thumbnail: "https://via.placeholder.com/300?text=Casio+Watch"
  },
  {
    id: 60,
    title: "Dell Inspiron 14 Laptop",
    brand: "Dell",
    category: "electronics",
    price: 58999,
    discountPercentage: 16,
    discountedPrice: 49559,
    stock: 22,
    rating: 4.4,
    description: "Slim and lightweight laptop with Intel i5 processor, 8GB RAM, 512GB SSD and anti-glare display.",
    thumbnail: "https://via.placeholder.com/300?text=Dell+Inspiron+14"
  },


  {
    id: 61,
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    brand: "Sony",
    category: "electronics",
    price: 29999,
    discountPercentage: 17,
    discountedPrice: 24899,
    stock: 14,
    rating: 4.9,
    description: "Industry-leading noise cancellation headphones with crystal clear sound and 30 hours battery life.",
    thumbnail: "https://via.placeholder.com/300?text=Sony+WH-1000XM5"
  },
  {
    id: 62,
    title: "Puma Men's Sports T-Shirt",
    brand: "Puma",
    category: "fashion",
    price: 1999,
    discountPercentage: 22,
    discountedPrice: 1559,
    stock: 75,
    rating: 4.3,
    description: "Lightweight and breathable sports t-shirt made with sweat-absorbing dry-fit fabric.",
    thumbnail: "https://via.placeholder.com/300?text=Puma+T-Shirt"
  },
  {
    id: 63,
    title: "OnePlus Nord CE 3 Smartphone",
    brand: "OnePlus",
    category: "electronics",
    price: 24999,
    discountPercentage: 12,
    discountedPrice: 21999,
    stock: 30,
    rating: 4.6,
    description: "Powerful smartphone with AMOLED display, 5G connectivity and fast charging support.",
    thumbnail: "https://via.placeholder.com/300?text=OnePlus+Nord+CE3"
  },
  {
    id: 64,
    title: "Milton Stainless Steel Water Bottle (1L)",
    brand: "Milton",
    category: "home",
    price: 899,
    discountPercentage: 10,
    discountedPrice: 809,
    stock: 120,
    rating: 4.2,
    description: "Durable stainless steel water bottle with leak-proof cap and long-lasting insulation.",
    thumbnail: "https://via.placeholder.com/300?text=Milton+Bottle"
  },
  {
    id: 65,
    title: "Canon EOS 1500D DSLR Camera",
    brand: "Canon",
    category: "electronics",
    price: 38999,
    discountPercentage: 15,
    discountedPrice: 33149,
    stock: 9,
    rating: 4.7,
    description: "24.1MP DSLR camera with WiFi connectivity, full HD recording and powerful image processor.",
    thumbnail: "https://via.placeholder.com/300?text=Canon+EOS+1500D"
  },


  {
    id: 66,
    title: "Apple iPhone 14 (128GB)",
    brand: "Apple",
    category: "electronics",
    price: 79999,
    discountPercentage: 8,
    discountedPrice: 73599,
    stock: 18,
    rating: 4.8,
    description: "Super Retina XDR display smartphone with A15 Bionic chip and advanced dual-camera system.",
    thumbnail: "https://via.placeholder.com/300?text=iPhone+14"
  },
  {
    id: 67,
    title: "Lenovo IdeaPad Slim 5 Laptop",
    brand: "Lenovo",
    category: "electronics",
    price: 62999,
    discountPercentage: 13,
    discountedPrice: 54809,
    stock: 16,
    rating: 4.5,
    description: "Slim and powerful laptop with Ryzen 5 processor, 16GB RAM and 512GB SSD storage.",
    thumbnail: "https://via.placeholder.com/300?text=Lenovo+IdeaPad+Slim+5"
  },
  {
    id: 68,
    title: "Titan Analog Men's Watch",
    brand: "Titan",
    category: "fashion",
    price: 7499,
    discountPercentage: 14,
    discountedPrice: 6449,
    stock: 27,
    rating: 4.4,
    description: "Premium stainless steel analog watch with elegant design and water resistance.",
    thumbnail: "https://via.placeholder.com/300?text=Titan+Watch"
  },
  {
    id: 69,
    title: "Whirlpool 7kg Fully Automatic Washing Machine",
    brand: "Whirlpool",
    category: "appliances",
    price: 28999,
    discountPercentage: 11,
    discountedPrice: 25809,
    stock: 11,
    rating: 4.6,
    description: "Top load fully automatic washing machine with smart sensors and powerful motor.",
    thumbnail: "https://via.placeholder.com/300?text=Whirlpool+Washing+Machine"
  },
  {
    id: 70,
    title: "Realme 32-inch Smart LED TV",
    brand: "Realme",
    category: "electronics",
    price: 18999,
    discountPercentage: 19,
    discountedPrice: 15389,
    stock: 24,
    rating: 4.3,
    description: "HD Ready smart TV with built-in streaming apps, Dolby audio and slim bezel design.",
    thumbnail: "https://via.placeholder.com/300?text=Realme+Smart+TV"
  },



  {
    id: 71,
    title: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    category: "electronics",
    price: 72999,
    discountPercentage: 9,
    discountedPrice: 66429,
    stock: 13,
    rating: 4.7,
    description: "Premium tablet with AMOLED display, Snapdragon processor and S-Pen support.",
    thumbnail: "https://via.placeholder.com/300?text=Galaxy+Tab+S9"
  },
  {
    id: 72,
    title: "Noise ColorFit Pro 5 Smartwatch",
    brand: "Noise",
    category: "electronics",
    price: 4999,
    discountPercentage: 21,
    discountedPrice: 3949,
    stock: 55,
    rating: 4.2,
    description: "Advanced smartwatch with AMOLED display, Bluetooth calling and fitness tracking features.",
    thumbnail: "https://via.placeholder.com/300?text=Noise+Smartwatch"
  },
  {
    id: 73,
    title: "Wooden Queen Size Bed with Storage",
    brand: "HomeStyle",
    category: "furniture",
    price: 25999,
    discountPercentage: 15,
    discountedPrice: 22099,
    stock: 7,
    rating: 4.5,
    description: "Spacious queen size bed with hydraulic storage and premium wood finish.",
    thumbnail: "https://via.placeholder.com/300?text=Queen+Size+Bed"
  },
  {
    id: 74,
    title: "Adidas Men's Running Jacket",
    brand: "Adidas",
    category: "fashion",
    price: 6999,
    discountPercentage: 18,
    discountedPrice: 5739,
    stock: 32,
    rating: 4.4,
    description: "Lightweight running jacket with wind-resistant fabric and modern athletic fit.",
    thumbnail: "https://via.placeholder.com/300?text=Adidas+Jacket"
  },
  {
    id: 75,
    title: "HP LaserJet Pro Printer",
    brand: "HP",
    category: "electronics",
    price: 15999,
    discountPercentage: 14,
    discountedPrice: 13759,
    stock: 19,
    rating: 4.3,
    description: "High-speed laser printer with wireless connectivity and sharp print quality.",
    thumbnail: "https://via.placeholder.com/300?text=HP+LaserJet+Printer"
  },



  {
    id: 76,
    title: "ASUS ROG Strix Gaming Laptop",
    brand: "ASUS",
    category: "electronics",
    price: 119999,
    discountPercentage: 12,
    discountedPrice: 105599,
    stock: 8,
    rating: 4.8,
    description: "High-performance gaming laptop with RTX graphics, 16GB RAM and 144Hz display.",
    thumbnail: "https://via.placeholder.com/300?text=ASUS+ROG+Strix"
  },
  {
    id: 77,
    title: "Sony PlayStation 5 Console",
    brand: "Sony",
    category: "electronics",
    price: 54999,
    discountPercentage: 5,
    discountedPrice: 52249,
    stock: 6,
    rating: 4.9,
    description: "Next-gen gaming console with ultra-fast SSD and immersive 3D audio experience.",
    thumbnail: "https://via.placeholder.com/300?text=PlayStation+5"
  },
  {
    id: 78,
    title: "Apple Watch Series 9",
    brand: "Apple",
    category: "electronics",
    price: 41999,
    discountPercentage: 7,
    discountedPrice: 39059,
    stock: 21,
    rating: 4.7,
    description: "Advanced smartwatch with health tracking, ECG support and always-on Retina display.",
    thumbnail: "https://via.placeholder.com/300?text=Apple+Watch+Series+9"
  },
  {
    id: 79,
    title: "Reebok Training Shoes",
    brand: "Reebok",
    category: "fashion",
    price: 5999,
    discountPercentage: 20,
    discountedPrice: 4799,
    stock: 38,
    rating: 4.3,
    description: "Comfortable training shoes with durable sole and stylish sporty design.",
    thumbnail: "https://via.placeholder.com/300?text=Reebok+Shoes"
  },
  {
    id: 80,
    title: "Philips Air Fryer (4.1L)",
    brand: "Philips",
    category: "appliances",
    price: 10999,
    discountPercentage: 16,
    discountedPrice: 9239,
    stock: 17,
    rating: 4.6,
    description: "Healthy cooking air fryer with rapid air technology and easy digital controls.",
    thumbnail: "https://via.placeholder.com/300?text=Philips+Air+Fryer"
  },




  {
    id: 81,
    title: "Logitech MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "electronics",
    price: 9999,
    discountPercentage: 18,
    discountedPrice: 8199,
    stock: 26,
    rating: 4.8,
    description: "Advanced wireless mouse with ultra-fast scrolling, silent clicks and multi-device connectivity.",
    thumbnail: "https://via.placeholder.com/300?text=Logitech+MX+Master+3S"
  },
  {
    id: 82,
    title: "Mi 10000mAh Power Bank",
    brand: "Xiaomi",
    category: "electronics",
    price: 1499,
    discountPercentage: 20,
    discountedPrice: 1199,
    stock: 85,
    rating: 4.4,
    description: "Compact and lightweight power bank with fast charging and dual USB output.",
    thumbnail: "https://via.placeholder.com/300?text=Mi+Power+Bank"
  },
  {
    id: 83,
    title: "Wooden 4-Seater Dining Table Set",
    brand: "UrbanHome",
    category: "furniture",
    price: 35999,
    discountPercentage: 14,
    discountedPrice: 30959,
    stock: 5,
    rating: 4.5,
    description: "Premium wooden dining table set with 4 comfortable chairs and elegant finish.",
    thumbnail: "https://via.placeholder.com/300?text=Dining+Table+Set"
  },
  {
    id: 84,
    title: "Levi's Slim Fit Jeans",
    brand: "Levi's",
    category: "fashion",
    price: 3999,
    discountPercentage: 22,
    discountedPrice: 3119,
    stock: 48,
    rating: 4.3,
    description: "Stylish slim fit jeans made with stretchable and durable denim fabric.",
    thumbnail: "https://via.placeholder.com/300?text=Levis+Jeans"
  },
  {
    id: 85,
    title: "Bosch 6kg Front Load Washing Machine",
    brand: "Bosch",
    category: "appliances",
    price: 32999,
    discountPercentage: 11,
    discountedPrice: 29369,
    stock: 9,
    rating: 4.6,
    description: "Energy efficient front load washing machine with anti-vibration design and multiple wash programs.",
    thumbnail: "https://via.placeholder.com/300?text=Bosch+Washing+Machine"
  },




  {
    id: 86,
    title: "Acer 27-inch Full HD Monitor",
    brand: "Acer",
    category: "electronics",
    price: 17999,
    discountPercentage: 15,
    discountedPrice: 15299,
    stock: 14,
    rating: 4.5,
    description: "27-inch Full HD monitor with IPS panel, slim design and eye-care technology.",
    thumbnail: "https://via.placeholder.com/300?text=Acer+Monitor"
  },
  {
    id: 87,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "electronics",
    price: 11999,
    discountPercentage: 18,
    discountedPrice: 9839,
    stock: 29,
    rating: 4.7,
    description: "Portable waterproof Bluetooth speaker with powerful bass and 12 hours playtime.",
    thumbnail: "https://via.placeholder.com/300?text=JBL+Flip+6"
  },
  {
    id: 88,
    title: "U.S. Polo Assn. Casual Shirt",
    brand: "U.S. Polo Assn.",
    category: "fashion",
    price: 2499,
    discountPercentage: 20,
    discountedPrice: 1999,
    stock: 52,
    rating: 4.2,
    description: "Comfortable cotton casual shirt with classic fit and premium stitching.",
    thumbnail: "https://via.placeholder.com/300?text=US+Polo+Shirt"
  },
  {
    id: 89,
    title: "Havells 1200mm Ceiling Fan",
    brand: "Havells",
    category: "appliances",
    price: 3499,
    discountPercentage: 17,
    discountedPrice: 2904,
    stock: 40,
    rating: 4.3,
    description: "Energy-efficient ceiling fan with powerful motor and modern design.",
    thumbnail: "https://via.placeholder.com/300?text=Havells+Ceiling+Fan"
  },
  {
    id: 90,
    title: "Google Pixel 8 Smartphone",
    brand: "Google",
    category: "electronics",
    price: 75999,
    discountPercentage: 10,
    discountedPrice: 68399,
    stock: 12,
    rating: 4.8,
    description: "Flagship smartphone with advanced AI camera features and smooth OLED display.",
    thumbnail: "https://via.placeholder.com/300?text=Pixel+8"
  },



  {
    id: 91,
    title: "Oppo Enco Air3 Wireless Earbuds",
    brand: "Oppo",
    category: "electronics",
    price: 3999,
    discountPercentage: 20,
    discountedPrice: 3199,
    stock: 34,
    rating: 4.3,
    description: "True wireless earbuds with AI noise reduction and long battery backup.",
    thumbnail: "https://via.placeholder.com/300?text=Oppo+Enco+Air3"
  },
  {
    id: 92,
    title: "Allen Solly Formal Trousers",
    brand: "Allen Solly",
    category: "fashion",
    price: 2799,
    discountPercentage: 18,
    discountedPrice: 2295,
    stock: 46,
    rating: 4.2,
    description: "Premium formal trousers with slim fit design and comfortable fabric.",
    thumbnail: "https://via.placeholder.com/300?text=Allen+Solly+Trousers"
  },
  {
    id: 93,
    title: "Godrej 1.5 Ton 3 Star Split AC",
    brand: "Godrej",
    category: "appliances",
    price: 38999,
    discountPercentage: 12,
    discountedPrice: 34319,
    stock: 10,
    rating: 4.5,
    description: "Energy efficient split air conditioner with turbo cooling and anti-dust filter.",
    thumbnail: "https://via.placeholder.com/300?text=Godrej+Split+AC"
  },
  {
    id: 94,
    title: "Amazon Echo Dot (5th Gen)",
    brand: "Amazon",
    category: "electronics",
    price: 5499,
    discountPercentage: 25,
    discountedPrice: 4124,
    stock: 39,
    rating: 4.6,
    description: "Smart speaker with Alexa voice assistant and improved sound quality.",
    thumbnail: "https://via.placeholder.com/300?text=Echo+Dot+5th+Gen"
  },
  {
    id: 95,
    title: "Decathlon Mountain Bike (27.5 Inch)",
    brand: "Decathlon",
    category: "sports",
    price: 19999,
    discountPercentage: 15,
    discountedPrice: 16999,
    stock: 8,
    rating: 4.4,
    description: "Durable mountain bike with front suspension and lightweight alloy frame.",
    thumbnail: "https://via.placeholder.com/300?text=Mountain+Bike"
  },



  {
    id: 96,
    title: "Infinix Zero 5G Smartphone",
    brand: "Infinix",
    category: "electronics",
    price: 17999,
    discountPercentage: 14,
    discountedPrice: 15479,
    stock: 23,
    rating: 4.1,
    description: "Affordable 5G smartphone with smooth display and long-lasting battery life.",
    thumbnail: "https://via.placeholder.com/300?text=Infinix+Zero+5G"
  },
  {
    id: 97,
    title: "Prestige 3L Pressure Cooker",
    brand: "Prestige",
    category: "appliances",
    price: 2499,
    discountPercentage: 18,
    discountedPrice: 2049,
    stock: 64,
    rating: 4.3,
    description: "Durable stainless steel pressure cooker with safety valve and ergonomic handle.",
    thumbnail: "https://via.placeholder.com/300?text=Prestige+Cooker"
  },
  {
    id: 98,
    title: "Raymond Men's Blazer",
    brand: "Raymond",
    category: "fashion",
    price: 8999,
    discountPercentage: 20,
    discountedPrice: 7199,
    stock: 15,
    rating: 4.4,
    description: "Premium quality men's blazer with modern fit and elegant finish.",
    thumbnail: "https://via.placeholder.com/300?text=Raymond+Blazer"
  },
  {
    id: 99,
    title: "TP-Link Dual Band WiFi Router",
    brand: "TP-Link",
    category: "electronics",
    price: 3499,
    discountPercentage: 22,
    discountedPrice: 2729,
    stock: 41,
    rating: 4.5,
    description: "High-speed dual band WiFi router with wide coverage and easy setup.",
    thumbnail: "https://via.placeholder.com/300?text=TP-Link+Router"
  },
  {
    id: 100,
    title: "Voltas 1 Ton 3 Star Window AC",
    brand: "Voltas",
    category: "appliances",
    price: 28999,
    discountPercentage: 13,
    discountedPrice: 25229,
    stock: 11,
    rating: 4.3,
    description: "Compact window AC with turbo cooling and energy efficient performance.",
    thumbnail: "https://via.placeholder.com/300?text=Voltas+Window+AC"
  }



];

app.get("/", (req, res) => {
  res.send("My API is Running 🚀 E-Commerce");
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});