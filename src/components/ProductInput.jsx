// ProductInput.js
import React from 'react';

function ProductInput({ value, onChange, onSubmit }) {
  function handleEnter(e) {
    if (e.code !== 'Enter') return;
    onSubmit(e)
  }
  return (
    <input
      type="text"
      placeholder="Enter a product idea"
      value={value}
      onChange={onChange}
      onKeyDown={handleEnter}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
    />
  );
}

export default ProductInput;
