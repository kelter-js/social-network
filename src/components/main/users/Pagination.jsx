import React, { useRef, memo } from 'react';
import PaginationRouter from './PaginationRouter';
import Button from '@mui/material/Button';

const Pagination = ({
  jumpIndex,
  updateJumpIndex,
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
      if (!jumpIndex) {
        updateJumpIndex(true);
      }
      return;
    }

    if (jumpIndex) {
      updateJumpIndex(false);
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
    return jumpIndex ? (
      'users__pagination-info users__pagination-info--attention'
    ) : (
      'users__pagination-info'
    );
  }

  return (
    (shouldHide) ? (null) : (
      <div className='users__pagination-wrapper' data-testid='pagination-container'>
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
                data-testid='page-jump-input'
                name='pageIndex'
                className='users__pagination-index-field'
              />
            </label>
            <Button
              disabled={isLoading}
              type='submit'
              className='users__pagination-submit'
              data-testid='submit-jump-to-page'
              variant='contained'>
              {jumpToPageText}
            </Button>
          </form>
          {!isLoading && (
            <p className={getMaxLengthElemClass()} data-testid='max-page-warning'>
              {maxJumpLengthText} {`${totalPages}`.length}
            </p>
          )}
        </div>
      </div>
    )
  );
}

export default memo(Pagination);
