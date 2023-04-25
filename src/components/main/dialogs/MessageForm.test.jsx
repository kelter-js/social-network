import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MessageForm from './MessageForm';
import userEvent from "@testing-library/user-event";
import { waitFor } from '@testing-library/react';

test('should render component without crash', () => {
  render(
    <MessageForm
      placeholder=''
      sendMessage={() => { }}
    />
  );
});

test('text input should receive proper placeholder through props', () => {
  render(
    <MessageForm
      placeholder='someKindOfPlaceholder'
      sendMessage={() => { }}
    />
  );

  expect(screen.getByTestId(`new-message-label`)).toHaveTextContent('someKindOfPlaceholder');
});

test('should invoke prop-callback with correct arguments', async () => {
  const addMessage = jest.fn();

  render(
    <MessageForm
      placeholder='someKindOfPlaceholder'
      sendMessage={addMessage}
    />
  );

  userEvent.type(screen.getByTestId('new-message-text'), "test message");
  userEvent.click(screen.getByTestId('send-new-message'));

  await waitFor(() => expect(addMessage).toBeCalled());
  await waitFor(() => expect(addMessage).toBeCalledTimes(1));
  await waitFor(() => expect(addMessage).toBeCalledWith('test message'));
});
