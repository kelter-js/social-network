import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostCreationForm from './PostCreationForm';
import userEvent from "@testing-library/user-event";
import { waitFor } from '@testing-library/react';

test('should render component without crash', () => {
  render(
    <PostCreationForm
      defaultText=''
      addPost={() => { }}
    />
  );
});

test('should render label with text provided through props', () => {
  render(
    <PostCreationForm
      defaultText='some kind of test placeholder'
      addPost={() => { }}
    />
  );

  const spanWithPlaceholder = screen.getByTestId('add-new-post-label');
  expect(spanWithPlaceholder).toBeInTheDocument();
  expect(spanWithPlaceholder).toHaveTextContent('some kind of test placeholder');
});

test('should invoke props callback, after type text in textarea and submit form', async () => {
  const createPost = jest.fn();

  render(
    <PostCreationForm
      defaultText='some kind of test placeholder'
      addPost={createPost}
    />
  );

  userEvent.type(screen.getByTestId('new-post-textarea'), "test message");
  userEvent.click(screen.getByTestId('create-new-post'));

  await waitFor(() => expect(createPost).toBeCalled());
  await waitFor(() => expect(createPost).toBeCalledTimes(1));
  await waitFor(() => expect(createPost).toBeCalledWith('test message'));
});
