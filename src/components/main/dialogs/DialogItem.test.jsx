import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DialogItem from './DialogItem';
import { MemoryRouter } from 'react-router-dom';

test('should render component without crash', () => {
  render(
    <MemoryRouter>
      <DialogItem  path='someKindOfDialogue' dialog='someKindOfUserName'/>
    </MemoryRouter>
  );
});

test('link component should receive href through props, and have same text inside link as text received through props', () => {
  render(
    <MemoryRouter>
      <DialogItem  path='someKindOfDialogue' dialog='someKindOfUserName'/>
    </MemoryRouter>
  );
  const dialogItem = screen.getByTestId('dialog-item-someKindOfDialogue');

  expect(dialogItem).toBeInTheDocument();
  expect(dialogItem).toHaveTextContent('someKindOfUserName');
  expect(dialogItem).toHaveAttribute('href', '/someKindOfDialogue');
});
