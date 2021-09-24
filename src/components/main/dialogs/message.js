import React from 'react'

const Message = (props) => {
  const messages = props.messages.map((message, index) => {
    return (
      <p key = { index } className = 'dialogs__phrase'>
        { message }
      </p>
    );
  })
  return (
    <div className = 'dialogs__message'>
      { messages }
    </div>
  );
}

export { Message }
