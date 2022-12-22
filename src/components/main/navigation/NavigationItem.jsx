import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ navItem }) => {
  return (
    <NavLink
      activeClassName='navigation__link--current'
      className='navigation__link'
      to={`/${navItem}`}
    >
      {navItem[0].toUpperCase() + navItem.slice(1)}
    </NavLink>
  );
}

export default NavigationItem;
