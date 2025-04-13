import React from 'react';

const ProductDetails = ({ product, onBack }) => {
  if (!product) return null;

  return (
    <div className="p-8 max-w-md mx-auto">
      <button className="mb-4 text-blue-600" onClick={onBack}>← Back</button>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h2 className="mt-4 text-2xl font-bold">{product.name}</h2>
      <p className="text-xl text-green-600">{product.price}</p>
      <p className="mt-4 text-gray-700">More information about {product.name} goes here.</p>
    </div>
  );
};

export default ProductDetails;
