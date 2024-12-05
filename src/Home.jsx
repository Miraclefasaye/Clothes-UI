import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

// Mock product data
const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    description: "A comfortable cotton T-shirt.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    description: "Stylish and durable denim jeans.",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Jacket",
    price: 89.99,
    description: "Warm and cozy winter jacket.",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Shoes",
    price: 59.99,
    description: "Comfortable running shoes.",
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 29.99,
    description: "Stylish sunglasses for sunny days.",
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    name: "Hat",
    price: 15.99,
    description: "A cool summer hat.",
    image: "/images/product6.jpg",
  },
  {
    id: 7,
    name: "Scarf",
    price: 25.99,
    description: "A warm winter scarf.",
    image: "/images/product7.jpg",
  },
  {
    id: 8,
    name: "Watch",
    price: 99.99,
    description: "An elegant wristwatch.",
    image: "/images/product8.jpg",
  },
  {
    id: 9,
    name: "Bag",
    price: 45.99,
    description: "A spacious travel bag.",
    image: "/images/product9.jpg",
  },
  {
    id: 10,
    name: "Belt",
    price: 18.99,
    description: "A stylish leather belt.",
    image: "/images/product10.jpg",
  },
];

function Home() {
  return (
    <div>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to={`/details/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; // Ensure a default export
