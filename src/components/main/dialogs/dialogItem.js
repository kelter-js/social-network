import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <li className='dialogs__dialog-item'>
      <NavLink activeClassName='dialogs__dialog--current' className='dialogs__dialog' to={props.path}>
        {props.dialog}
      </NavLink>
    </li>
  );
}

export { DialogItem }
