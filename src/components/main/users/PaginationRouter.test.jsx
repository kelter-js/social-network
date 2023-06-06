import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PaginationRouter from './PaginationRouter';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import store from '../../../state/reduxStore';
import { Provider } from 'react-redux';

test('should render component without crash', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={0}
        totalPages={0}
        firstPage={0}
        isStart={true}
        isLoading={false}
      />
    </Provider>
  );
});

test('shouldnt render content depending on props', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={0}
        totalPages={1}
        firstPage={2}
        isStart={false}
        isLoading={false}
      />
    </Provider>
  );

  expect(screen.queryByTestId('user-page-button-0')).not.toBeInTheDocument();
});

test('shouldnt disable navigation buttons if isLoading prop true', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={1}
        totalPages={200}
        firstPage={1}
        isStart={true}
        isLoading={true}
      />
    </Provider>
  );

  expect(screen.getByTestId('user-page-button-1')).toBeDisabled();
});

test('should render navigation middle variant', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={5}
        totalPages={200}
        firstPage={1}
        isStart={true}
        isLoading={true}
      />
    </Provider>
  );

  expect(screen.getByTestId('pagination-middle-ellipsis')).toBeInTheDocument();
});

test('should render navigation end variant', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={200}
        totalPages={200}
        firstPage={1}
        isStart={false}
        isLoading={true}
      />
    </Provider>
  );

  expect(screen.getByTestId('pagination-end-ellipsis')).toBeInTheDocument();
});

test('should render navigation start variant', () => {
  render(
    <Provider store={store}>
      <PaginationRouter
        pages={1}
        totalPages={200}
        firstPage={1}
        isStart={true}
        isLoading={true}
      />
    </Provider>
  );

  expect(screen.getByTestId('pagination-start-ellipsis')).toBeInTheDocument();
});
