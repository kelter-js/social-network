import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('should render component without crash', () => {
  render(<Footer />);
});

test('should render text', () => {
  render(<Footer />);

  const textElement = screen.getByTestId('footer-text');
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveTextContent('Created with React power');
});

