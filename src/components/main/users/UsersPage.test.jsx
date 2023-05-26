import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UsersPage from './UsersPage';
import userEvent from "@testing-library/user-event";

test('should render component without crash', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle={''}
      isLoading={false}
      disable={false}
    />
  );
});

test('button should receive inner text content from props', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle={''}
      isLoading={false}
      disable={false}
    />
  );

  expect(screen.getByTestId('user-page-button-0')).toHaveTextContent('0');
});

test('button should receive css class based on props', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle='testClass'
      isLoading={false}
      disable={false}
    />
  );

  expect(screen.getByTestId('user-page-button-0')).toHaveClass('users__select-page testClass');
});

test('button shouldnt be disabled based on props', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle='testClass'
      isLoading={false}
      disable={false}
    />
  );

  expect(screen.getByTestId('user-page-button-0')).not.toHaveAttribute('disabled');
});

test('button should be disabled based on props', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle='testClass'
      isLoading={true}
      disable={false}
    />
  );

  expect(screen.getByTestId('user-page-button-0')).toHaveAttribute('disabled');
});

test('button should be disabled based on another type of props', () => {
  render(
    <UsersPage
      currentPage={0}
      setLoadingState={() => { }}
      setCurrentPage={() => { }}
      clearUsers={() => { }}
      currentPageStyle='testClass'
      isLoading={false}
      disable={true}
    />
  );

  expect(screen.getByTestId('user-page-button-0')).toHaveAttribute('disabled');
});

test('props callbacks shouldnt fire if current page === 0', () => {
  const setLoadingState = jest.fn();
  const setCurrentPage = jest.fn();
  const clearUsers = jest.fn();

  render(
    <UsersPage
      currentPage={0}
      setLoadingState={setLoadingState}
      setCurrentPage={setCurrentPage}
      clearUsers={clearUsers}
      currentPageStyle='testClass'
      isLoading={false}
      disable={false}
    />
  );

  userEvent.click(screen.getByTestId('user-page-button-0'));
  expect(setLoadingState).not.toBeCalled()
  expect(setCurrentPage).not.toBeCalled()
  expect(clearUsers).not.toBeCalled()
});

test('props callbacks should fire if current page !== 0', () => {
  const setLoadingState = jest.fn();
  const setCurrentPage = jest.fn();
  const clearUsers = jest.fn();

  const currentPage = 5;

  render(
    <UsersPage
      currentPage={currentPage}
      setLoadingState={setLoadingState}
      setCurrentPage={setCurrentPage}
      clearUsers={clearUsers}
      currentPageStyle='testClass'
      isLoading={false}
      disable={false}
    />
  );

  userEvent.click(screen.getByTestId(`user-page-button-${currentPage}`));

  expect(setLoadingState).toBeCalledTimes(1)
  expect(setCurrentPage).toBeCalledTimes(1)
  expect(setCurrentPage).toBeCalledWith(currentPage)
  expect(clearUsers).toBeCalledTimes(1)
});
