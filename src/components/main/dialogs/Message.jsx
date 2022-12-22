import React from 'react';
import MessageForm from './MessageForm';

const Message = ({
  addMessage,
  currentDialog,
  messages,
  messageInfo
}) => {
  const sendMessage = (messageText) => {
    addMessage(currentDialog, messageText);
  };

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

      <MessageForm
        messageInfo={messageInfo}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default Message;
