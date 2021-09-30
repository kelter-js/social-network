import React, { useState } from 'react'
import { InputHandlers } from '../../../service.js'

const Message = (props) => {
  const [currentText, textUpdater] = useState(props.defaultText);

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

      <form className='page-main__dialogs-form'>
        <label className='page-main__dialogs-label'>
          New message text...
          <textarea
            className='page-main__dialogs-text'
            value={currentText}
            name='messageText'
            onChange={InputHandlers.onChange(textUpdater)}
            onBlur={InputHandlers.onBlur(textUpdater, props.defaultText, currentText)}
            onFocus={InputHandlers.onFocus(textUpdater, props.defaultText, currentText)}
          />
        </label>
        <input className='page-main__send-message' type="submit" value="" />
      </form>
    </div>
  );
}

export { Message }
