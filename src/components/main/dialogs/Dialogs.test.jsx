import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dialogs from './Dialogs';
import { MemoryRouter } from 'react-router-dom';
import { chat } from '../../../state/initialState';
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import store from '../../../state/reduxStore';

test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <Dialogs chat={chat} />
    </MemoryRouter>
  );
});

test('should render every dialogue link with correct href', () => {
  render(
    <MemoryRouter>
      <Dialogs chat={chat} />
    </MemoryRouter>
  );

  expect(screen.getByTestId('dialog-item-/messages/KalashnikovSergey')).toHaveTextContent('Kalashnikov Sergey');
  expect(screen.getByTestId('dialog-item-/messages/KalashnikovSergey')).toHaveAttribute('href', '/messages/KalashnikovSergey');
  expect(screen.getByTestId('dialog-item-/messages/PredelnayaVisota')).toHaveTextContent('Predelnaya Visota');
  expect(screen.getByTestId('dialog-item-/messages/PredelnayaVisota')).toHaveAttribute('href', '/messages/PredelnayaVisota');
  expect(screen.getByTestId('dialog-item-/messages/SomeGuy')).toHaveTextContent('Some Guy');
  expect(screen.getByTestId('dialog-item-/messages/SomeGuy')).toHaveAttribute('href', '/messages/SomeGuy');
  expect(screen.getByTestId('dialog-item-/messages/AnotherOne')).toHaveTextContent('Another One');
  expect(screen.getByTestId('dialog-item-/messages/AnotherOne')).toHaveAttribute('href', '/messages/AnotherOne');
  expect(screen.getByTestId('dialog-item-/messages/RussianCaliber')).toHaveTextContent('Russian Caliber');
  expect(screen.getByTestId('dialog-item-/messages/RussianCaliber')).toHaveAttribute('href', '/messages/RussianCaliber');
});

test('should open clicked dialogue and render some messages from this dialogue', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Dialogs chat={chat} />
      </Provider>
    </MemoryRouter>
  );

  userEvent.click(screen.getByTestId("dialog-item-/messages/KalashnikovSergey"));

  expect(screen.getByTestId('message-Hi, how are you?')).toBeInTheDocument();
  expect(screen.getByTestId('message-Hi, im fine, thank you, so what about you?')).toBeInTheDocument();
});
