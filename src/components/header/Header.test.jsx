import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

const state = {
  userData: {
    isAuthenticated: true,
    login: 'testLoginName',
  }
}

beforeEach(() => {
  state.userData.isAuthenticated = true;
});

test('should render component without crash', () => {
  state.userData.isAuthenticated = false;

  render(
    <BrowserRouter>
      <Header {...state} />
    </BrowserRouter>
  );
});

test('should render login button', () => {
  state.userData.isAuthenticated = false;

  render(
    <BrowserRouter>
      <Header {...state} />
    </BrowserRouter>
  );

  const loginButton = screen.getByTestId('login-button');
  const logoutButton = screen.queryByTestId('logout-button');

  expect(loginButton).toBeInTheDocument();
  expect(logoutButton).not.toBeInTheDocument();
});

test('should render logout button', () => {
  render(
    <BrowserRouter>
      <Header {...state} />
    </BrowserRouter>
  );

  const loginButton = screen.queryByTestId('login-button');
  const logoutButton = screen.getByTestId('logout-button');

  expect(loginButton).not.toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
});

test('should render login name', () => {
  render(
    <BrowserRouter>
      <Header {...state} />
    </BrowserRouter>
  );

  const loginName = screen.queryByTestId('login-name');

  expect(loginName).toBeInTheDocument();
  expect(loginName).toHaveTextContent('testLoginName');
});

test('should use onClick props callback', () => {
  const onLogout = jest.fn();

  render(
    <BrowserRouter>
      <Header {...state} onLogout={onLogout}/>
    </BrowserRouter>
  );

  expect(onLogout).not.toHaveBeenCalled();
  const logoutButton = screen.getByTestId('logout-button');
  expect(logoutButton).toBeInTheDocument();
  userEvent.click(logoutButton);
  expect(onLogout).toHaveBeenCalledTimes(1);
});

