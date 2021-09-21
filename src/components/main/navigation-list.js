import React from 'react'

const Navigation = (props) => {
  return (
    <ul className = 'navigation__list'>
      {
        props.navigation.map((elem, index) => {
          return (
            <li key = { index }>
              <a className = 'navigation__link' href = '#'>
                { elem }
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export { Navigation }
