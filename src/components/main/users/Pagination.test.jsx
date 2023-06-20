import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import store from '../../../state/reduxStore';
import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';

jest.mock("./PaginationRouter", () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

test('should render component without crash', () => {
  render(
    <Pagination
      jumpIndex={false}
      updateJumpIndex={() => { }}
      totalPages={1}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );
});

test('should invoke provided function', async () => {
  const updateJumpIndex = jest.fn();
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={updateJumpIndex}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  fireEvent.change(screen.getByTestId('page-jump-input'), {
    target: { value: "new" }
  });

  await waitFor(() => expect(updateJumpIndex).toBeCalled());
});

test('should render correct max page warning', async () => {
  const maxJumpLengthText = 4;
  const totalPages = 4;
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={totalPages}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={maxJumpLengthText}
      onKeyDown={() => { }}
    />
  );

  expect(screen.getByTestId('max-page-warning')).toHaveTextContent(`${maxJumpLengthText} ${String(totalPages).length}`);
});

test('should invoke updateJumpPage function', async () => {
  const updateJumpPage = jest.fn();
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={updateJumpPage}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  fireEvent.change(screen.getByTestId('page-jump-input'), {
    target: { value: "new" }
  });

  await waitFor(() => expect(updateJumpPage).toBeCalled());
});

test('should invoke clearUsers function', async () => {
  const clearUsers = jest.fn();
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={clearUsers}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  fireEvent.change(screen.getByTestId('page-jump-input'), {
    target: { value: "new" }
  });

  fireEvent.click(screen.getByTestId('submit-jump-to-page'));

  await waitFor(() => expect(clearUsers).toBeCalled());
});

test('should invoke setCurrentPage function', async () => {
  const setCurrentPage = jest.fn();
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={setCurrentPage}
      currentPage={1}
      firstPage={1}
      jumpToPage={1}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  fireEvent.change(screen.getByTestId('page-jump-input'), {
    target: { value: 123 }
  });

  fireEvent.click(screen.getByTestId('submit-jump-to-page'));

  await waitFor(() => expect(setCurrentPage).toBeCalled());
});

test('page input should receive value from component props', async () => {
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={15}
      isLoading={false}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  expect(screen.getByTestId('page-jump-input')).toHaveValue(15);
});

test('isLoading prop should disable render max length page text and disable inputs & buttons', async () => {
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={15}
      isLoading={true}
      jumpToPageText='text'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  expect(screen.getByTestId('page-jump-input')).toBeDisabled();
  expect(screen.getByTestId('submit-jump-to-page')).toBeDisabled();
  expect(screen.queryByTestId('max-page-warning')).not.toBeInTheDocument();
});

test('submit button should receive text through props', async () => {
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={15}
      isLoading={true}
      jumpToPageText='jumpToPageText'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
    />
  );

  expect(screen.getByTestId('submit-jump-to-page')).toHaveTextContent('jumpToPageText');
});

test('should invoke onKeyDown props function on key down event', async () => {
  const onKeyDown = jest.fn();
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={15}
      isLoading={true}
      jumpToPageText='jumpToPageText'
      maxJumpLengthText={4}
      onKeyDown={onKeyDown}
    />
  );

  fireEvent.keyDown(screen.getByTestId('page-jump-input'));

  expect(onKeyDown).toBeCalled();
});

test('should not render anything if shouldHide prop provided', async () => {
  render(
    <Pagination
      jumpIndex={true}
      updateJumpIndex={() => { }}
      totalPages={4}
      updateJumpPage={() => { }}
      clearUsers={() => { }}
      setCurrentPage={() => { }}
      currentPage={1}
      firstPage={1}
      jumpToPage={15}
      isLoading={false}
      jumpToPageText='jumpToPageText'
      maxJumpLengthText={4}
      onKeyDown={() => { }}
      shouldHide
    />
  );

  expect(screen.queryByTestId('pagination-container')).not.toBeInTheDocument();
});
