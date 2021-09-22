import React from 'react'

const Feed = (props) => {
  return (
    <div className='feed__element'>
      <p className='feed__text'>
        { props.data.post }
      </p>
      <p className='feed__likes'>
        { props.data.likes }
      </p>
    </div>
  );
}

export { Feed }
