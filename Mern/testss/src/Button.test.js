import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders a button with the initial label', () => {
  const { getByTestId } = render(<Button />);
  const buttonElement = getByTestId('button');

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Click me');
});

test('changes the label when the button is clicked', () => {
  const { getByTestId } = render(<Button />);
  const buttonElement = getByTestId('button');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('Clicked');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('Click me');
});
 