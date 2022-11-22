import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = ({ userData, onLogout }) => {
  return (
    <header className='page-header container'>
      {userData.isAuthenticated ? (
        <>
          <p className='page-header__user-name'>
            {userData.login}
          </p>
          <Button onClick={onLogout} variant="contained" color="primary">
            Logout
          </Button>
        </>
      ) : (
        <NavLink to='/login' className='page-header__login'>
          Login
        </NavLink>
      )}
    </header >
  );
}

export { Header }
