import React from 'react';

const Feed = (props) => {
  const {
    data,
    postId,
    changeLikeState,
  } = props;

  const buttonClass = data.liked ? 'feed__likes feed__likes--pressed' : 'feed__likes';

  const onClick = () => {
    changeLikeState(postId);
  }

  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {data.post}
      </p>
      <button
        type='button'
        className={buttonClass}
        onClick={onClick}>
        {data.likes}
      </button>
    </div>
  );
}

export { Feed }
