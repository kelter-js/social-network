import React, { useRef } from 'react';
import { PaginationRouter } from './paginationRouter.js';

const Pagination = (props) => {
  const {
    maxJumpIndexAttention,
    updateMaxJumpIndexAttention,
    totalPages,
    updateJumpPage,
    clearUsers,
    setCurrentPage,
    currentPage,
    firstPage,
    jumpToPage,
    isLoading,
    jumpToPageText,
    maxJumpLengthText,
    onKeyDown,
  } = props;

  const onChange = (e) => {
    const currentValue = e.target.value;

    if (`${currentValue}`.length > `${totalPages}`.length) {
      if (!maxJumpIndexAttention) {
        updateMaxJumpIndexAttention(true);
      }
      return;
    }

    if (maxJumpIndexAttention) {
      updateMaxJumpIndexAttention(false);
    }

    if (currentValue > totalPages) {
      updateJumpPage(totalPages);
      return;
    }

    updateJumpPage(currentValue);
  }

  const indexInput = useRef();

  const changePage = () => {
    if (+indexInput.current.value !== 0) {
      clearUsers();
      setCurrentPage(+indexInput.current.value);
      updateJumpPage('');
    }
  }

  return (
    <div className='users__pagination-wrapper'>
      <ul className='users__pagination-list'>
        <PaginationRouter
          totalPages={totalPages}
          pages={currentPage}
          firstPage={firstPage}
          isStart={true}
          isLoading={isLoading}
        />
        <PaginationRouter
          totalPages={totalPages}
          pages={currentPage}
          firstPage={firstPage}
          isStart={false}
          isLoading={isLoading}
        />
      </ul>
      <div className='users__search-page-wrapper'>
        <form onSubmit={changePage}>
          <label>
            Jump to page:
            <input
              type='number'
              disabled={isLoading}
              value={jumpToPage}
              onChange={onChange}
              onKeyDown={onKeyDown(changePage, indexInput)}
              ref={indexInput}
              name='pageIndex'
              className='users__pagination-index-field'
            />
          </label>
          <input
            type='submit'
            value={jumpToPageText}
            className='users__pagination-submit'
          />
        </form>
        {!isLoading && (
          <p className={maxJumpIndexAttention ? 'users__pagination-info users__pagination-info--attention' : 'users__pagination-info'}>
            {maxJumpLengthText} {`${totalPages}`.length}
          </p>
        )}
      </div>
    </div>
  );
}

export { Pagination }
