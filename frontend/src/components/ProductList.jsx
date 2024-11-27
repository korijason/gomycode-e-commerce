// client/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
          <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold text-green-500 mt-2">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
