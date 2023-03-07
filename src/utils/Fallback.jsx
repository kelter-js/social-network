import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Fallback = () => {
  return (
    <div data-testid='fallback' className='error-container'>
      <div style={{ fontSize: '150px' }}>
        <ErrorOutlineIcon color='error' fontSize='inherit' />
      </div>
      <h1>Something went wrong</h1>
      <p>Please, reload page</p>
    </div>
  );
};

export default Fallback;
