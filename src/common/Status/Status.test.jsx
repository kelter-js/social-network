import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Status, { StatusComponent } from './Status';
import { Provider } from 'react-redux';
import store from '../../state/reduxStore';
import mockAxios from 'jest-mock-axios';
import userEvent from "@testing-library/user-event";

afterEach(() => {
  mockAxios.reset();
});

test('should render component without crash', () => {
  render(
    <Provider store={store}>
      <Status />
    </Provider>
  );
});

const currentID = 'randomID';
const currentStatus = 'someKindOfStatus';

test('should create API request', () => {
  const getUserStatus = jest.fn();
  render(
    <Provider store={store}>
      <StatusComponent
        status={currentStatus}
        id={currentID}
        getUserStatus={getUserStatus}
        updateUserStatus={() => { }}
        userId="someKindOfUserID"
      />
    </Provider>
  );

  expect(getUserStatus).toHaveBeenCalledTimes(1);
});

test('should create API request with provided ID', () => {
  const getUserStatus = jest.fn();
  const currentID = 'randomID';
  render(
    <StatusComponent
      status={currentStatus}
      id={currentID}
      getUserStatus={getUserStatus}
      updateUserStatus={() => { }}
      userId="someKindOfUserID"
    />
  );

  expect(getUserStatus).toHaveBeenCalledWith(currentID);
});

test('should render component with status', () => {
  render(
    <StatusComponent
      status={currentStatus}
      id={currentID}
      getUserStatus={() => { }}
      updateUserStatus={() => { }}
      userId="someKindOfUserID"
    />
  );

  const statusText = screen.getByTestId('profile-status');
  expect(statusText).toBeInTheDocument();
  expect(statusText).toHaveTextContent(currentStatus);
});

test('should render change status container', () => {
  render(
    <StatusComponent
      status={currentStatus}
      id={currentID}
      getUserStatus={() => { }}
      updateUserStatus={() => { }}
      userId={currentID}
    />
  );

  expect(screen.queryByTestId('change-status-container')).not.toBeInTheDocument();

  const userStatus = screen.getByTestId('profile-status');
  userEvent.click(userStatus);

  expect(screen.getByTestId('change-status-container')).toBeInTheDocument();
});

test('should invoke props-callback updateUserStatus', () => {
  const updateUserStatus = jest.fn();
  render(
    <StatusComponent
      status={currentStatus}
      id={currentID}
      getUserStatus={() => { }}
      updateUserStatus={updateUserStatus}
      userId={currentID}
    />
  );

  const userStatus = screen.getByTestId('profile-status');
  userEvent.click(userStatus);

  expect(screen.getByTestId('apply-status-changes')).toBeInTheDocument();

  expect(updateUserStatus).toBeCalledTimes(0);

  const saveChangesButton = screen.getByTestId('apply-status-changes');
  userEvent.click(saveChangesButton);

  expect(updateUserStatus).toBeCalledTimes(1);
});

test('should invoke props-callback updateUserStatus and render new status', () => {
  let status = 'someKindOfStatus';
  const updateUserStatus = jest.fn(() => {
    status = 'newKindOfStatus';
  });

  const { rerender } = render(
    <StatusComponent
      status={status}
      id={currentID}
      getUserStatus={() => { }}
      updateUserStatus={updateUserStatus}
      userId={currentID}
    />
  );

  const userStatus = screen.getByTestId('profile-status');
  expect(userStatus).toHaveTextContent('someKindOfStatus');
  userEvent.click(userStatus);


  const saveChangesButton = screen.queryByTestId('apply-status-changes');
  expect(saveChangesButton).toBeInTheDocument();

  userEvent.click(saveChangesButton);

  expect(updateUserStatus).toBeCalledTimes(1);

  rerender(
    <StatusComponent
      status={status}
      id={currentID}
      getUserStatus={() => { }}
      updateUserStatus={updateUserStatus}
      userId={currentID}
    />
  );

  expect(status).toBe('newKindOfStatus');

  const newUserStatus = screen.getByTestId('profile-status');
  expect(newUserStatus).toHaveTextContent('newKindOfStatus');
});

