import React, { useRef, memo } from 'react';
import PaginationRouter from './PaginationRouter';
import Button from '@mui/material/Button';

const Pagination = ({
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
  shouldHide
}) => {
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

  const changePage = (e) => {
    e.preventDefault();

    if (+indexInput.current.value !== 0) {
      clearUsers();
      setCurrentPage(+indexInput.current.value);
      updateJumpPage('');
    }
  }

  const getMaxLengthElemClass = () => {
    return maxJumpIndexAttention ? (
      'users__pagination-info users__pagination-info--attention'
    ) : (
      'users__pagination-info'
    );
  }

  return (
    (shouldHide) ? (null) : (
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
            <Button
              disabled={isLoading}
              type='submit'
              className='users__pagination-submit'
              variant='contained'>
              {jumpToPageText}
            </Button>
          </form>
          {!isLoading && (
            <p className={getMaxLengthElemClass()}>
              {maxJumpLengthText} {`${totalPages}`.length}
            </p>
          )}
        </div>
      </div>
    )
  );
}

export default memo(Pagination);
