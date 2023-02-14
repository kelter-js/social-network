import React from 'react';
import Button from '@mui/material/Button';

const UsersPage = ({
  currentPage,
  setLoadingState,
  setCurrentPage,
  clearUsers,
  currentPageStyle,
  isLoading,
  disable,
}) => {
  const changePage = () => {
    if (+currentPage !== 0) {
      setLoadingState(true);
      clearUsers();
      setCurrentPage(currentPage);
    }
  }

  const currentStyle = `users__select-page ${currentPageStyle ? currentPageStyle : ''}`;

  return (
    <li className='users__pagination-item'>
      <Button
        className={currentStyle}
        onClick={changePage}
        disabled={isLoading || disable}
        variant='contained'>
        {currentPage}
      </Button>
    </li>
  );
}

export default UsersPage;
