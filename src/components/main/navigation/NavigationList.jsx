import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationList = ({ defaultMenu }) => {
  const navigationItems = Object
    .values(defaultMenu)
    .filter((item) => item !== '/login')
    .map((elem, index) => {
      return (
        <li key={index}>
          <NavigationItem navItem={elem.split('/')[1]} />
        </li>
      );
    });

  return (
    <ul className='navigation__list'>
      {navigationItems}
    </ul>
  );
}

export default NavigationList;
