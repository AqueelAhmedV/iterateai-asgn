import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductInput from '../src/components/ProductInput'

test('renders product input with placeholder', () => {
  const { getByPlaceholderText } = render(<ProductInput />);
  const input = getByPlaceholderText('Enter a product idea');
  expect(input).toBeInTheDocument();
});

test('calls onChange handler when input value changes', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(<ProductInput onChange={handleChange} />);
  const input = getByPlaceholderText('Enter a product idea');
  fireEvent.change(input, { target: { value: 'New product idea' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
