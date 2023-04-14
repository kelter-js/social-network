import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DialogList from './DialogList';
import { MemoryRouter } from 'react-router-dom';

test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <DialogList dialogs={[]} />
    </MemoryRouter>
  );
});

test('should render list of links with all href`s received through props', () => {
  render(
    <MemoryRouter>
      <DialogList dialogs={['test', 'link', 'someKindOfDialogue', 'newOne', 'also']} />
    </MemoryRouter>
  );

  expect(screen.getByTestId('dialog-item-/messages/test')).toHaveTextContent('test');
  expect(screen.getByTestId('dialog-item-/messages/test')).toHaveAttribute('href', '/messages/test');
  expect(screen.getByTestId('dialog-item-/messages/link')).toHaveTextContent('link');
  expect(screen.getByTestId('dialog-item-/messages/link')).toHaveAttribute('href', '/messages/link');
  expect(screen.getByTestId('dialog-item-/messages/someKindOfDialogue')).toHaveTextContent('someKindOfDialogue');
  expect(screen.getByTestId('dialog-item-/messages/someKindOfDialogue')).toHaveAttribute('href', '/messages/someKindOfDialogue');
  expect(screen.getByTestId('dialog-item-/messages/newOne')).toHaveTextContent('newOne');
  expect(screen.getByTestId('dialog-item-/messages/newOne')).toHaveAttribute('href', '/messages/newOne');
  expect(screen.getByTestId('dialog-item-/messages/also')).toHaveTextContent('also');
  expect(screen.getByTestId('dialog-item-/messages/also')).toHaveAttribute('href', '/messages/also');
});
