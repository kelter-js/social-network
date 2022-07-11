import React from 'react';
import Feed from './feedContainer.js';

const FeedList = (props) => {
  return (
    props.feed.map((feed, index) =>
      <Feed
        key={index}
        postId={index}
        data={feed}
      />)
  );
}

export { FeedList }
