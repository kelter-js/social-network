import React from 'react'

const Feed = (props) => {
  return (
    <>
      {
        props.feed.map((feed, index) => {
          return (
            <div key={index} className='feed__element'>
              <p className='feed_text'>
                {feed}
              </p>
            </div>
          );
        })
      }
    </>
  );
}

export { Feed }
