import React from 'react'

const Feed = (props) => {
  return (
    <div className='feed__element'>
      <p className='feed_text'>
        { props.data }
      </p>
    </div>
  );
}

export { Feed }
