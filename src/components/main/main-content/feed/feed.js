import React, { useRef } from 'react'

const Feed = (props) => {
  const currentButton = useRef();

  const onClick = (e) => {
    const postLiked = currentButton.current.classList.contains('feed__likes--pressed');

    props.interaction.dispatch(props.interaction.createActionChangeLike(postLiked, props.postId));

    currentButton.current.classList.toggle('feed__likes--pressed');
  }

  return (
    <div className='feed__element'>
      <p className='feed__text'>
        {props.data.post}
      </p>
      <button
        type='button'
        className='feed__likes'
        ref={currentButton}
        onClick={onClick}>
        {props.data.likes}
      </button>
    </div>
  );
}

export { Feed }
