// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div className="mt-4 flex justify-center flex-wrap max-w-2/3">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
