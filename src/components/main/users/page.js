import React from 'react';

const Page = (props) => {
  const {
    currentPage,
    setLoadingState,
    setCurrentPage,
    clearUsers,
    currentPageStyle,
    isLoading,
    disable,
  } = props;

  const changePage = () => {
    if (+currentPage !== 0) {
      setLoadingState(true);
      clearUsers();
      setCurrentPage(currentPage);
    }
  }

  return (
    <li className='users__pagination-item'>
      <button
        className={currentPageStyle ? `users__select-page ${currentPageStyle}` : 'users__select-page'}
        type='button'
        onClick={changePage}
        disabled={isLoading || disable}>
        {currentPage}
      </button>
    </li>
  );
}

export { Page }
