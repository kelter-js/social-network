import React from 'react'

const Message = (props) => {

  const formateUserName = (name) => {
    let formattedName = name;
    name.split('').map((item, index) => (item.toUpperCase() === item) ? formattedName = name.slice(0, index) + ' ' + name.slice(index) : '');
    return formattedName;
  }

  return (
    <div className='dialogs__message'>
      {props.messages.map((message, index) => {
        const isUser = (index % 2 === 0);
        return (
          <div className = 'dialogs__chat' key={index}>
            <p className={`dialogs__author ${isUser ? 'dialogs__author--user' : 'dialogs__author--responder'}` }>
              {isUser ? 'You' : formateUserName(window.location.href.slice(window.location.href.lastIndexOf('/') + 1))}
            </p>
            <p className={`dialogs__phrase ${isUser ? 'dialogs__phrase--user' : 'dialogs__phrase--responder'}`}>
              {message}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { Message }
