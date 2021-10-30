import React from 'react';
import { FeedContainer } from './feedContainer.js';

const FeedList = (props) => {
  return (
    <>
      {
        props.feed.map((feed, index) => {
          return (
            <FeedContainer
              key={index}
              postId={index}
              data={feed}
              actionManager={props.actionManager}
              dispatch = {props.dispatch}/>
          );
        })
      }
    </>
  );
}

export { FeedList }
