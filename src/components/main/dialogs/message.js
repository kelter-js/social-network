import React from 'react'

const Message = (props) => {
  return (
    <div className='dialogs__message'>
      {props.messages.map((message, index) => {
        return (
          <div className = 'dialogs__chat' key={index}>
            <p className={`dialogs__author ${message.style.author}`}>
              {message.author}
            </p>
            <p className={`dialogs__phrase ${message.style.message}`}>
              {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { Message }
