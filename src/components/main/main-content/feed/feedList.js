import React from 'react';
import { FeedContainer } from './feedContainer.js';

const FeedList = (props) => {
  return (
    props.feed.map((feed, index) =>
      <FeedContainer
        key={index}
        postId={index}
        data={feed}
      />)
  );
}

export { FeedList }
