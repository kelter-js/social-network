import React from 'react';
import { DialogItem } from './dialogItem.js';

const DialogList = (props) => {
  return (
    <ul className='dialogs__dialog-list'>
      {
        props.dialogs.map((dialog, index) => {
          const path = `/messages/${dialog.split(' ').join('')}`;
          return (
            <DialogItem
              path={path}
              key={index}
              dialog={dialog}
            />
          );
        })
      }
    </ul>
  );
}

export { DialogList }
