import React from 'react'
import { Feed } from './feed.js'

const FeedList = (props) => {
  return (
    <>
      {
        props.feed.map((feed, index) => {
          return (
            <Feed key = { index } data = { feed }/>
          );
        })
      }
    </>
  );
}

export { FeedList }
