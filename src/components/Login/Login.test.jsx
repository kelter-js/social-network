import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoginComponent } from './Login';
import userEvent from "@testing-library/user-event";
import { waitFor } from '@testing-library/react';

test('should render component without crash', () => {
  render(
    <LoginComponent />
  );
});

test('should render loading', () => {
  render(
    <LoginComponent
      isLoading={false}
      authorize={() => { }}
      isLoginFailed={false}
      isAuthenticating={true}
    />
  );

  const loadingSpinner = screen.getByTestId('loading-container');
  expect(loadingSpinner).toBeInTheDocument();
});

test('should not render loading', () => {
  render(
    <LoginComponent
      isLoading={false}
      authorize={() => { }}
      isLoginFailed={false}
      isAuthenticating={false}
    />
  );

  const loadingSpinner = screen.queryByTestId('loading-container');
  expect(loadingSpinner).not.toBeInTheDocument();
});

test('should render login form component', () => {
  render(
    <LoginComponent
      isLoading={false}
      authorize={() => { }}
      isLoginFailed={false}
      isAuthenticating={false}
    />
  );

  const loginFormContainer = screen.getByTestId('login-form-container');
  expect(loginFormContainer).toBeInTheDocument();
});

test('should render error message', () => {
  render(
    <LoginComponent
      isLoading={false}
      authorize={() => { }}
      isLoginFailed={true}
      isAuthenticating={false}
    />
  );

  const errorContainer = screen.getByTestId('login-error-container');
  expect(errorContainer).toBeInTheDocument();
});

test('should call prop callback on render', async () => {
  const authorize = jest.fn();
  render(
    <LoginComponent
      isLoading={false}
      authorize={authorize}
      isLoginFailed={false}
      isAuthenticating={false}
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

