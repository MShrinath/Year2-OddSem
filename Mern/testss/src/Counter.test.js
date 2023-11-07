import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders the counter component', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  const incrementButton = getByTestId('increment');
  const decrementButton = getByTestId('decrement');

  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('0');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('0');
});
