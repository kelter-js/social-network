import React from 'react';
import '@testing-library/jest-dom';
import FeedList from './FeedList';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../../state/reduxStore';

const contentProp = {
  feed: [{
    post: "Hey, is there anybody?",
    likes: 15,
    liked: false
  }]
}

test('should render component without crash', () => {
  render(
    <Provider store={store}>
      <FeedList {...contentProp} />
    </Provider>
  );
});

test('should render text of post, received through props', () => {
  render(
    <Provider store={store}>
      <FeedList {...contentProp} />
    </Provider>
  );

  expect(screen.getByTestId('post-text-0')).toHaveTextContent("Hey, is there anybody?");
});

test('like button should receive specific css class depending on received props', () => {
  render(
    <Provider store={store}>
      <FeedList {...contentProp} />
    </Provider>
  );

  expect(screen.getByTestId('post-button-0')).toHaveClass('feed__likes');
});

test('like button should get different css class depending on received props', () => {
  const newProps = { ...contentProp }
  newProps.feed[0].liked = true;

  render(
    <Provider store={store}>
      <FeedList {...contentProp} />
    </Provider>
  );

  expect(screen.getByTestId('post-button-0')).toHaveClass('feed__likes feed__likes--pressed');
});

test('like button should render amount of likes as inner child element', () => {
  render(
    <Provider store={store}>
      <FeedList {...contentProp} />
    </Provider>
  );


  expect(screen.getByTestId('post-button-0')).toBeInTheDocument();

  expect(screen.getByTestId('post-button-0')).toHaveTextContent(15);
});

