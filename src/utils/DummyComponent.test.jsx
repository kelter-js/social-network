import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DummyComponent from './DummyComponent';

test('should render component without crash', () => {
  render(<DummyComponent />);
});

test('component should render text, that passed through props', () => {
  const textToRender = 'test title';
  render(<DummyComponent title={textToRender} />);

  const dummyText = screen.getByTestId('dummy-text');
  expect(dummyText).toBeInTheDocument();
  expect(dummyText).toHaveTextContent(textToRender);
});
