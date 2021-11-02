import React from 'react';

const Feed = (props) => {
  const buttonClass = props.data.liked ? 'feed__likes feed__likes--pressed' : 'feed__likes';

  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {props.data.post}
      </p>
      <button
        type='button'
        className={buttonClass}
        onClick={props.changeLikeStatus}>
        {props.data.likes}
      </button>
    </div>
  );
}

export { Feed }
