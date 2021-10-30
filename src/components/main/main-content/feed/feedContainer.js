import React from 'react';
import { Feed } from './feed.js';

const FeedContainer = (props) => {
  const buttonClass = props.data.liked ? 'feed__likes feed__likes--pressed' : 'feed__likes';

  const changeLikeStatus = (e) => {
    props.dispatch(props.actionManager.createActionChangeLikeState(props.postId));
  }

  return (
    <Feed
      {...props}
      changeLikeStatus={changeLikeStatus}
      buttonClass={buttonClass}
    />
  );
}

export { FeedContainer }
