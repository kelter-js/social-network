import React from 'react'
import { DialogList } from './dialogList.js'
import { Message } from './message.js'
import { Route, Switch } from 'react-router-dom'

const Dialogs = (props) => {
  const messagesList = Object
    .entries(props.messages)
    .map((message, index) => {
      return (
        <Route
          key={index}
          path={`/messages/${message[0].split(' ').join('')}`}
          render={() =>
          <Message
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
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={props.dialogs} />
      <Switch>
        {messagesList}
      </Switch>
    </div>
  );
}

export { Dialogs }
