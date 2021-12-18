import React from 'react';
import { NavigationItem } from './navigationItem.js';

const NavigationList = (props) => {
  const navigationItems = Object.values(props.defaultMenu).map((elem, index) => {
    return (
      <li key={index}>
        <NavigationItem
          navItem={elem.split('/')[1]}
        />
      </li>
    );
  });

  return (
    <ul className = 'navigation__list'>
      {navigationItems}
    </ul>
  );
}

export { NavigationList }
