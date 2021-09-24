import React from 'react'
import { Dialog } from './dialog.js'

const DialogList = (props) => {
  return (
    <ul className='dialogs__dialog-list'>
      <Dialog dialogs = {props.dialogs}/>
    </ul>
  );
}

export { DialogList }
