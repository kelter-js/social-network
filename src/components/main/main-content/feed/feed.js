import React from 'react'

const Feed = (props) => {
  const onClick = (e) => {
    const target = e.target;
    const postLiked = target.classList.contains('feed__likes--pressed');

    props.interaction.dispatch(props.interaction.createActionChangeLike(postLiked, props.postId));

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
