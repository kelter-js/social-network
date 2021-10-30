import React from 'react';

const Feed = (props) => {
  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {props.data.post}
      </p>
      <button
        type='button'
        className={props.buttonClass}
        onClick={props.changeLikeStatus}>
        {props.data.likes}
      </button>
    </div>
  );
}

export { Feed }
