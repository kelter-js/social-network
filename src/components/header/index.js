import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='page-header container'>
      {props.userData.isAuthenticated ? (
        <p className='page-header__user-name'>
          {props.userData.login}
        </p>
      ) : (
        <NavLink to='/login' className='page-header__login'>
          Login
        </NavLink>
      )}
    </header >
  );
}

export { Header }
