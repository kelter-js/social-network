import React from 'react';
import { DialogList } from './dialogList.js';
import { Route } from 'react-router-dom';
import Message from './messageContainer.js';
import { Switch } from 'react-router-dom';

const Dialogs = ({ chat }) => {
  const messagesList = Object
    .entries(chat.messages)
    .map((message, index) => {
      return (
        <Route
          key={index}
          path={`/messages/${message[0].split(' ').join('')}`}
          render={() =>
            <Message
              messages={message[1]}
              currentDialog={message[0]}
            />
          }
        />
      );
    });

  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={chat.dialogs} />
      <Switch>
        {messagesList}
      </Switch>
    </div>
  );
}

export { Dialogs }
