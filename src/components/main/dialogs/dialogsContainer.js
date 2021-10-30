import React from 'react';
import { MessageContainer } from './messageContainer.js';
import { Route } from 'react-router-dom';
import { Dialogs } from './dialogs.js';

const DialogsContainer = (props) => {
  const messagesList = Object
    .entries(props.messages)
    .map((message, index) => {
      return (
        <Route
          key={index}
          path={`/messages/${message[0].split(' ').join('')}`}
          render={() =>
          <MessageContainer
            dispatch = {props.dispatch}
            handlers = {props.handlers}
            messages={message[1]}
            defaultText = {props.defaultText}
            currentText = {props.currentText}
            actionManager = {props.actionManager}
            currentDialog = {message[0]}
          />}
        />
      );
    });

  return (
    <Dialogs
      {...props}
      messagesList={messagesList}
    />
  );
}

export { DialogsContainer }
