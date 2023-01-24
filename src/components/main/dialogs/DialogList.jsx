import React from 'react';
import DialogItem from './DialogItem';

const DialogList = ({ dialogs }) => {
  return (
    <ul className='dialogs__dialog-list'>
      {dialogs.map((dialog, index) => {
        const path = `/messages/${dialog.split(' ').join('')}`;
        return (
          <DialogItem
            path={path}
            key={index}
            dialog={dialog}
          />
        );
      })}
    </ul>
  );
}

export default DialogList;
