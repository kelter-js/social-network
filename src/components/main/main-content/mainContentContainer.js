import React, { useRef } from 'react';
import { MainPageContent } from './mainContent.js';

const MainPageContentContainer = (props) => {
  const textAreaElement = useRef();

  const addPost = () => {
    props.dispatch(props.actionManager.createActionAddPost());
  }

  const changeText = (text) => {
    props.dispatch(props.actionManager.createActionChangeTextPost(text));
  }

  return (
    <MainPageContent
      {...props}
      addPost={addPost}
      changeText={changeText}
      textAreaElement={textAreaElement}
    />
  );
}

export { MainPageContentContainer }
