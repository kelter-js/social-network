import React from 'react';

const Feed = (props) => {
  const buttonClass = props.data.liked ? 'feed__likes feed__likes--pressed' : 'feed__likes';
  const changeLikeState = () => {
    props.changeLikeState(props.postId)
  }

  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {props.data.post}
      </p>
      <button
        type='button'
        className={buttonClass}
        onClick={changeLikeState}>
        {props.data.likes}
      </button>
    </div>
  );
}

export { Feed }
