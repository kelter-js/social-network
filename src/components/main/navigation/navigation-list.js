import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <ul className = 'navigation__list'>
      {
        props.navigation.map((elem, index) => {
          return (
            <li key = { index }>
              <NavLink className = 'navigation__link' to = {`/${elem}`}>
                { elem[0].toUpperCase() + elem.slice(1) }
              </NavLink>
            </li>
          );
        })
      }
    </ul>
  );
}

export { Navigation }
