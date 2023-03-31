import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from "@testing-library/user-event";
import { waitFor } from '@testing-library/react';

test('should render component without crash', () => {
  render(
    <LoginForm />
  );
});

test('should render login form component', () => {
  render(
    <LoginForm
      isLoading={false}
      handler={() => { }}
      isLoginFailed={false}
    />
  );

  const loginForm = screen.getByTestId('login-form');
  expect(loginForm).toBeInTheDocument();
});

test('should render error message', () => {
  render(
    <LoginForm
      isLoading={false}
      handler={() => { }}
      isLoginFailed={'login error'}
    />
  );

  const errorContainer = screen.getByTestId('login-error-container');
  expect(errorContainer).toBeInTheDocument();
});

test('should call prop callback on login attempt', async () => {
  const authorize = jest.fn();
  render(
    <LoginForm
      isLoading={false}
      handler={authorize}
      isLoginFailed={false}
    />
  );

  const emailElement = screen.getByTestId('login-email').querySelector('input');
  userEvent.type(emailElement, "test@test.test");
  expect(emailElement).toHaveValue("test@test.test");
  const passwordElement = screen.getByTestId('login-password').querySelector('input');
  userEvent.type(passwordElement, "12312312");
  expect(passwordElement).toHaveValue("12312312");
  const loginButton = screen.getByTestId('login-button');

  userEvent.click(loginButton);

  await waitFor(() => expect(authorize).toBeCalled());
});

test('should not call prop callback on login attempt, since email is incorrect', async () => {
  const authorize = jest.fn();
  render(
    <LoginForm
      isLoading={false}
      handler={authorize}
      isLoginFailed={false}
    />
  );

  const emailElement = screen.getByTestId('login-email').querySelector('input');
  userEvent.type(emailElement, "test.test");
  expect(emailElement).toHaveValue("test.test");
  const passwordElement = screen.getByTestId('login-password').querySelector('input');
  userEvent.type(passwordElement, "12312312");
  expect(passwordElement).toHaveValue("12312312");
  const loginButton = screen.getByTestId('login-button');

  userEvent.click(loginButton);

  await waitFor(() => expect(authorize).not.toBeCalled());
});

test('should call callback prop with rembemberMe flag set to false, if we didnt enable remember me checkbox', async () => {
  const authorize = jest.fn();
  render(
    <LoginForm
      isLoading={false}
      handler={authorize}
      isLoginFailed={false}
    />
  );

  const emailElement = screen.getByTestId('login-email').querySelector('input');
  userEvent.type(emailElement, "test.test@mail.com");
  expect(emailElement).toHaveValue("test.test@mail.com");
  const passwordElement = screen.getByTestId('login-password').querySelector('input');
  userEvent.type(passwordElement, "12312312");
  expect(passwordElement).toHaveValue("12312312");
  const loginButton = screen.getByTestId('login-button');

  userEvent.click(loginButton);

  await waitFor(() => expect(authorize).toBeCalledWith({
    email: "test.test@mail.com",
    password: "12312312",
    rememberMe: false,
  }));
});

test('should call callback prop with rembemberMe flag set to true, if we enable remember me checkbox', async () => {
  const authorize = jest.fn();
  render(
    <LoginForm
      isLoading={false}
      handler={authorize}
      isLoginFailed={false}
    />
  );

  const emailElement = screen.getByTestId('login-email').querySelector('input');
  userEvent.type(emailElement, "test.test@mail.com");
  expect(emailElement).toHaveValue("test.test@mail.com");
  const passwordElement = screen.getByTestId('login-password').querySelector('input');
  userEvent.type(passwordElement, "12312312");
  expect(passwordElement).toHaveValue("12312312");
  const rememberMeCheckbox = screen.getByTestId('login-remember-me');
  userEvent.click(rememberMeCheckbox);

  const loginButton = screen.getByTestId('login-button');
  userEvent.click(loginButton);


  await waitFor(() => expect(authorize).toBeCalledWith({
    email: "test.test@mail.com",
    password: "12312312",
    rememberMe: true,
  }));
});



