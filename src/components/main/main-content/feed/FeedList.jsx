import React from 'react';
import Feed from './FeedContainer';

const FeedList = (props) => {
  return (
    props.feed.map((feed, index) => <Feed key={index} postId={index} data={feed} />)
  );
}

export default FeedList;
