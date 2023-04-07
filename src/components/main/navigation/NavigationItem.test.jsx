import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavigationItem from './NavigationItem';
import { MemoryRouter } from 'react-router-dom';

test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <NavigationItem navItem='/newLink' />
    </MemoryRouter>
  );
});

test('should render link with specific testId', () => {
  render(
    <MemoryRouter>
      <NavigationItem navItem='/newLink' />
    </MemoryRouter>
  );

  expect(screen.getByTestId('navigation-item-/newLink')).toBeInTheDocument();
});
