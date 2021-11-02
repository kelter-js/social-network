import React from 'react';
import { DialogList } from './dialogList.js';
import { Route } from 'react-router-dom';
import { MessageContainer } from './messageContainer.js';
import { Switch } from 'react-router-dom';

const Dialogs = (props) => {
  const messagesList = Object
    .entries(props.chat.messages)
    .map((message, index) => {
      return (
        <Route
          key={index}
          path={`/messages/${message[0].split(' ').join('')}`}
          render={() =>
            <MessageContainer
              messages={message[1]}
              defaultText={props.chat.defaultText}
              currentText={props.chat.currentText}
              currentDialog={message[0]}
            />}
        />
      );
    });

  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={props.chat.dialogs} />
      <Switch>
        {messagesList}
      </Switch>
    </div>
  );
}

export { Dialogs }
