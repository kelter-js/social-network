import React from 'react';

const Feed = ({
  data,
  postId,
  changeLikeState,
}) => {
  const buttonClass = data.liked ? 'feed__likes feed__likes--pressed' : 'feed__likes';

  const onClick = () => {
    changeLikeState(postId);
  }

  return (
    <div className='feed__element'>
      <p className='feed__text' data-testid={`post-text-${postId}`}>
        {data.post}
      </p>
      <button
        type='button'
        className={buttonClass}
        data-testid={`post-button-${postId}`}
        onClick={onClick}
      >
        {data.likes}
      </button>
    </div>
  );
}

export default Feed;
