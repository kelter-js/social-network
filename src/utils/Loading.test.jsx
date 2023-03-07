import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('should render component without crash', () => {
  render(<Loading />);
});

test('should create API request', () => {
  const textProp = 'some kind of loading animation description';
  render(<Loading title={textProp} />);

  const loadingStatus = screen.getByTestId('loading-text');
  expect(loadingStatus).toBeInTheDocument();
  expect(loadingStatus).toHaveTextContent(textProp);
});

test('should receive additional css class, if shouldBeCentered prop provided', () => {
  render(<Loading title='' shouldBeCentered />);

  const container = screen.getByTestId('loading-container');
  expect(container).toBeInTheDocument();
  expect(container.classList.contains('loading-animation')).toBe(true);
});

test('should not receive additional css class, if shouldBeCentered prop isnt provided', () => {
  render(<Loading title='' />);

  const container = screen.getByTestId('loading-container');
  expect(container).toBeInTheDocument();
  expect(container.classList.contains('loading-animation')).toBe(false);
});
