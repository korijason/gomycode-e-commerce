// client/src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
