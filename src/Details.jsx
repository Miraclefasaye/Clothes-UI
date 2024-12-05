import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Details.css';

// Mock data (replace with API data as needed)
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


function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  // Add product ID to the cookie
  const addToCart = () => {
    const cartCookie = Cookies.get('cart') || ''; // Get the current cart cookie
    const cart = cartCookie.split(',').filter(Boolean); // Convert to an array
    cart.push(id); // Add the current product ID
    Cookies.set('cart', cart.join(','), { expires: 7 }); // Update the cookie, expire in 7 days
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="details-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <div>
        <button onClick={addToCart}>
          Add to Cart
        </button>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}

export default Details;
