// client/src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="bg-gray-200 p-4 mb-2 rounded-md">
              <h3 className="text-xl">{product.name}</h3>
              <p className="text-lg text-green-500">${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
