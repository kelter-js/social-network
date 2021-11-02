import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <NavLink activeClassName='navigation__link--current' className='navigation__link' to={`/${props.navItem}`}>
      {props.navItem[0].toUpperCase() + props.navItem.slice(1)}
    </NavLink>
  );
}

export { NavigationItem }
