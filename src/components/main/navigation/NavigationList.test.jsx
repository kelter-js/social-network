import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavigationList from './NavigationList';
import { MemoryRouter } from 'react-router-dom';

const menu = {
  newLink: '/newLink',
  testLink: '/testLink',
  anotherLink: '/anotherLink',
  yahooLink: '/yahooLink',
};

test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <NavigationList defaultMenu={menu} />
    </MemoryRouter>
  );
});

test('should render every link passed through props', () => {
  render(
    <MemoryRouter>
      <NavigationList defaultMenu={menu} />
    </MemoryRouter>
  );

  expect(screen.getByTestId('navigation-item-newLink')).toBeInTheDocument();
  expect(screen.getByTestId('navigation-item-testLink')).toBeInTheDocument();
  expect(screen.getByTestId('navigation-item-anotherLink')).toBeInTheDocument();
  expect(screen.getByTestId('navigation-item-yahooLink')).toBeInTheDocument();
});
