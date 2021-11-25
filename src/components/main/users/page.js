import React from 'react';

const Page = (props) => {
  const onClick = () => {
    props.setCurrentPage(props.currentPage);
  }

  return (
    <li className='users__pagination-item'>
      <button
        className={props.currentPageStyle ? `users__select-page ${props.currentPageStyle}` : 'users__select-page' }
        type='button'
        onClick={onClick}
        disabled={props.isLoading || props.disable}>
        {props.currentPage}
      </button>
    </li>
  );
}

export { Page }
