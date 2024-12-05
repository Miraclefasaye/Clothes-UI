import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './ui/Nav'; // Import the Nav component

function App() {
  return (
    <div>
      <Nav /> {/* Include the Nav component */}
      <h1>Welcome to My Clothing Store</h1>
      <Outlet /> {/* Render child routes */}
    </div>
  );
}

export default App;
