import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../src/components/ProductList';

const mockProducts = [
  { id: 1, name: 'Product 1', description: 'Description 1', icon: 'icon1.png' },
  { id: 2, name: 'Product 2', description: 'Description 2', icon: 'icon2.png' },
];

test('renders list of products', () => {
  const { getByText } = render(<ProductList products={mockProducts} />);
  mockProducts.forEach(product => {
    const productName = getByText(product.name);
    const productDescription = getByText(product.description);
    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });
});