// ProductItem.js
import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="rounded-md w-[300px] border border-gray-300 shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <img src={product.icon} alt={product.name} className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}

export default ProductItem;
