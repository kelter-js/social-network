import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogList = (props) => {

  return (
    <ul className='dialogs__dialog-list'>
      {
        props.dialogs.map((dialog, index) => {
          const path = `/messages/${dialog.split(' ').join('')}`;
          return (
            <li className = 'dialogs__dialog-item' key={index}>
              <NavLink activeClassName='dialogs__dialog--current' className='dialogs__dialog' to={path}>
                {dialog}
              </NavLink>
            </li>
          );
        })
      }
    </ul>
  );
}

export { DialogList }
