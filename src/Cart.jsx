import React from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

// Mock product data (replace with API data as needed)
const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Jacket",
    price: 89.99,
    image: "https://via.placeholder.com/150",
  },
];

function Cart() {
  const navigate = useNavigate();

  // Retrieve cart data from the cookie
  const cartCookie = Cookies.get('cart') || '';
  const cartItems = cartCookie.split(',').filter(Boolean);

  // Calculate product quantities
  const cart = cartItems.reduce((acc, itemId) => {
    const id = parseInt(itemId);
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  // Get unique products in the cart
  const cartProducts = Object.keys(cart).map((id) => {
    const product = products.find((p) => p.id === parseInt(id));
    return {
      ...product,
      quantity: cart[id],
      total: cart[id] * product.price,
    };
  });

  // Calculate sub-total
  const subTotal = cartProducts.reduce((sum, product) => sum + product.total, 0);

  if (cartProducts.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      <div>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '15px',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '50px', height: '50px' }}
            />
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Sub-total: ${subTotal.toFixed(2)}</h3>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '10px', textDecoration: 'none' }}>
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => navigate('/checkout')}>Complete Purchase</button>
      </div>
    </div>
  );
}

export default Cart;
