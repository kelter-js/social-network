import React from 'react';

const NavigationList = (props) => {
  return (
    <ul className = 'navigation__list'>
      {props.navigationItems}
    </ul>
  );
}

export { NavigationList }
