import React from 'react';
import { DialogList } from './dialogList.js';
import { Switch } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs={props.dialogs} />
      <Switch>
        {props.messagesList}
      </Switch>
    </div>
  );
}

export { Dialogs }
