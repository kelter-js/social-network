import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ path, dialog }) => {
  return (
    <li className='dialogs__dialog-item'>
      <NavLink activeClassName='dialogs__dialog--current' className='dialogs__dialog' to={path}>
        {dialog}
      </NavLink>
    </li>
  );
}

export default DialogItem;
