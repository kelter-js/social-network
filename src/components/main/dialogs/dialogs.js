import React from 'react'
import { DialogList } from './dialog-list.js'

const Dialogs = (props) => {
  return (
    <div className='page-main__dialogs-wrapper dialogs'>
      <DialogList dialogs = {props.dialogs}/>
    </div>
  );
}

export { Dialogs }
