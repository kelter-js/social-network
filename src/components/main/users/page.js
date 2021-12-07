import React from 'react';

const Page = (props) => {
  const changePage = () => {
    if (+props.currentPage !== 0) {
      props.setLoadingState(true);
      props.setCurrentPage(props.currentPage);
      props.clearUsers();
    }
  }

  return (
    <li className='users__pagination-item'>
      <button
        className={props.currentPageStyle ? `users__select-page ${props.currentPageStyle}` : 'users__select-page'}
        type='button'
        onClick={changePage}
        disabled={props.isLoading || props.disable}>
        {props.currentPage}
      </button>
    </li>
  );
}

export { Page }
