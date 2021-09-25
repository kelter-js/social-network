import React from 'react'
import { DialogList } from './dialog-list.js'
import { Message } from './message.js'
import { Route, Switch } from 'react-router-dom'

const Dialogs = (props) => {
  const currentMessages = props.messages;
  const messagesList = Object.entries(currentMessages).map((message, index) => {
    return (
      <Route key = { index } path={`/messages/${message[0].split(' ').join('')}`} component={() => {
        return (<Message messages={message[1]}/>);
      }} />
    );
  })
  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={props.dialogs}/>
      <Switch>
        {messagesList}
      </Switch>
    </div>
  );
}

export { Dialogs }
