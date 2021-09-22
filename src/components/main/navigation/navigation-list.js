import React from 'react'

const Navigation = (props) => {
  return (
    <ul className = 'navigation__list'>
      {
        props.navigation.map((elem, index) => {
          return (
            <li key = { index }>
              <a className = 'navigation__link' href = {`/${elem}`}>
                { elem[0].toUpperCase() + elem.slice(1) }
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export { Navigation }
