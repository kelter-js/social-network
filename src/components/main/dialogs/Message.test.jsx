import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Message from './Message';
import { MemoryRouter } from 'react-router-dom';
import { chat } from '../../../state/initialState';
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import store from '../../../state/reduxStore';
import { waitFor } from '@testing-library/react';

test('should render component without crash', () => {
  render(
    <Message
      placeholder=''
      addMessage={() => { }}
      currentDialog=''
      messages={[
        { style: { author: 'someClassName' }, author: 'someAuthorName', text: 'someText' },
      ]}
    />
  );
});

test('should render text and names received through props', () => {
  render(
    <Message
      placeholder=''
      addMessage={() => { }}
      currentDialog=''
      messages={[
        { style: { author: 'someClassName' }, author: 'someAuthorName', text: 'someText' },
      ]}
    />
  );

  expect(screen.getByTestId(`message-author-someAuthorName`)).toHaveTextContent('someAuthorName');
  expect(screen.getByTestId(`message-text-someText`)).toHaveTextContent('someText');
});

test('text input should receive proper placeholder through props', () => {
  render(
    <Message
      placeholder='someKindOfPlaceholder'
      addMessage={() => { }}
      currentDialog=''
      messages={[
        { style: { author: 'someClassName' }, author: 'someAuthorName', text: 'someText' },
      ]}
    />
  );

  expect(screen.getByTestId(`new-message-label`)).toHaveTextContent('someKindOfPlaceholder');
});

test('text invoke prop-callback with correct arguments', async () => {
  const addMessage = jest.fn();

  render(
    <Message
      placeholder='someKindOfPlaceholder'
      addMessage={addMessage}
      currentDialog='someKindOfDialog'
      messages={[
        { style: { author: 'someClassName' }, author: 'someAuthorName', text: 'someText' },
      ]}
    />
  );

  userEvent.type(screen.getByTestId('new-message-text'), "test message");
  userEvent.click(screen.getByTestId('send-new-message'));

  await waitFor(() => expect(addMessage).toBeCalled());
  await waitFor(() => expect(addMessage).toBeCalledTimes(1));
  await waitFor(() => expect(addMessage).toBeCalledWith('someKindOfDialog', 'test message'));
});
