import React from 'react';
import { FeedContainer } from './feedContainer.js';

const FeedList = (props) => {
  const feeds = props.feed.map((feed, index) => {
    return (
      <FeedContainer
        key={index}
        postId={index}
        data={feed}
      />
    );
  });

  return (
    <>
      {feeds}
    </>
  );
}

export { FeedList }
