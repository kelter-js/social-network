import React, { useRef } from 'react';
import { Message } from './message.js';

const MessageContainer = (props) => {
  const messageElement = useRef();

  const addMessage = () => {
    props.dispatch(props.actionManager.createActionMessage(props.currentDialog));
  }

  const changeText = (text) => {
    props.dispatch(props.actionManager.createActionChangeTextMessage(text));
  }

  return (
    <Message
      {...props}
      addMessage={addMessage}
      changeText={changeText}
      messageElement={messageElement}
    />
  );
}

export { MessageContainer }
