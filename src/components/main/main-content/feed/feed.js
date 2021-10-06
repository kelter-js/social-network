import React from 'react'

const Feed = (props) => {
  const onClick = (e) => {
    const target = e.target;
    if (target.classList.contains('feed__likes--pressed')) {
      props.dispatch({
        'type': 'dislike',
        'postId': props.postId,
      });
    } else {
      props.dispatch({
        'type': 'like',
        'postId': props.postId,
      });
    }
    target.classList.toggle('feed__likes--pressed');
  }

  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {props.data.post}
      </p>
      <button type='button' className='feed__likes' onClick={onClick}>
        {props.data.likes}
      </button>
    </div>
  );
}

export { Feed }
