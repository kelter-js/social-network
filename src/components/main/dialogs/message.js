import React, { useRef } from 'react';

const Message = (props) => {
  const {
    addMessage,
    currentDialog,
    messages,
    handlers,
    messageInfo,
    defaultText,
    currentText,
    changeText,
    eventType,
  } = props;

  const messageElement = useRef();
  const sendMessage = () => {
    addMessage(currentDialog);
  }

  const messagesList = messages.map((message, index) => {
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
      {messagesList}

      <form onSubmit={handlers.onSubmit(sendMessage)} className='page-main__dialogs-form'>
        <label className='page-main__dialogs-label'>
          {messageInfo}
          <textarea
            className='page-main__dialogs-text'
            ref={messageElement}
            value={(currentText === undefined) ? defaultText : currentText}
            name='messageText'
            onChange={(e) => changeText(e.target.value, eventType)}
            onBlur={handlers.onBlur(changeText, defaultText, currentText, eventType)}
            onFocus={handlers.onFocus(changeText, currentText, eventType)}
            onKeyDown={handlers.onEnter(sendMessage, messageElement)}
          />
        </label>
        <input
          className='page-main__send-message'
          type='submit'
          value=''
        />
      </form>
    </div>
  );
}

export { Message }
