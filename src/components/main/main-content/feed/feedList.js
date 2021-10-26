import React from 'react';
import { Feed } from './feed.js';

const FeedList = (props) => {
  return (
    <>
      {
        props.feed.map((feed, index) => {
          return (
            <Feed
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
