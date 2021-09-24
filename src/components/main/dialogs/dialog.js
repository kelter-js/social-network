import React from 'react'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
  return (
    props.dialogs.map((dialog, index) => {
      return (
        <li className = 'dialogs__dialog-item' key={index}>
          <NavLink activeClassName='dialogs__dialog--current' className='dialogs__dialog' to={`/${dialog}`}>
            {dialog}
          </NavLink>
        </li>
      );
    })
  );
}

export { Dialog }
