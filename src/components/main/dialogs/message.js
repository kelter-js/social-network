import React, { useState } from 'react'

const Message = (props) => {
  const [currentText, textUpdater] = useState(props.defaultText);

  const textArea = React.createRef();

  const addMessage = () => {
    props.addMessage(currentText, props.currentDialog, textUpdater);
  }

  return (
    <div className='dialogs__message'>
      {
        props.messages.map((message, index) => {
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
        })
      }

      <form onSubmit = {props.handlers.onSubmit(addMessage)} className='page-main__dialogs-form'>
        <label className='page-main__dialogs-label'>
          New message text...
          <textarea
            className='page-main__dialogs-text'
            ref={textArea}
            value={currentText}
            name='messageText'
            onChange={props.handlers.onChange(textUpdater)}
            onBlur={props.handlers.onBlur(textUpdater, props.defaultText, currentText)}
            onFocus={props.handlers.onFocus(textUpdater, props.defaultText, currentText)}
            onKeyDown={props.handlers.onEnter(addMessage, textArea)}
          />
        </label>
        <input className='page-main__send-message' type="submit" value="" />
      </form>
    </div>
  );
}

export { Message }
