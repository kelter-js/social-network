import React, { useRef } from 'react';

const Message = (props) => {
  const messageElement = useRef();

  const addMessage = () => {
    props.addMessage(props.currentDialog);
  }

  const messages = props.messages.map((message, index) => {
    return (
      <div className='dialogs__chat' key={index}>
        <p className={`dialogs__author ${message.style.author}`}>
          {message.author}
        </p>
        <p className={`dialogs__phrase ${message.style.message}`}>
          {message.text}
        </p>
      </div>
    );
  });

  return (
    <div className='dialogs__message'>
      {messages}

      <form onSubmit={props.handlers.onSubmit(addMessage)} className='page-main__dialogs-form'>
        <label className='page-main__dialogs-label'>
          New message text...
          <textarea
            className='page-main__dialogs-text'
            ref={messageElement}
            value={(props.currentText === undefined) ? props.defaultText : props.currentText}
            name='messageText'
            onChange={(e) => props.changeText(e.target.value)}
            onBlur={props.handlers.onBlur(props.changeText, props.defaultText, props.currentText)}
            onFocus={props.handlers.onFocus(props.changeText, props.currentText)}
            onKeyDown={props.handlers.onEnter(addMessage, messageElement)}
          />
        </label>
        <input className='page-main__send-message' type='submit' value='' />
      </form>
    </div>
  );
}

export { Message }
