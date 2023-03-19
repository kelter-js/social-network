import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = ({ userData, onLogout }) => {
  return (
    <header className='page-header container'>
      {userData.isAuthenticated ? (
        <>
          <p data-testid='login-name' className='page-header__user-name'>
            {userData.login}
          </p>
          <Button data-testid='logout-button' onClick={onLogout} variant='contained' color='primary'>
            Logout
          </Button>
        </>
      ) : (
        <NavLink data-testid='login-button' to='/login' className='page-header__login'>
          Login
        </NavLink>
      )}
    </header>
  );
}

export default Header;
