import React, { useRef } from 'react';
import { PaginationRouter } from './paginationRouter.js';

const Pagination = (props) => {
  const onChange = (e) => {
    const currentValue = e.target.value;

    if (`${currentValue}`.length > `${props.totalPages}`.length) {
      if (!props.maxJumpIndexAttention) {
        props.updateMaxJumpIndexAttention(true);
      }
      return;
    }

    if (props.maxJumpIndexAttention) {
      props.updateMaxJumpIndexAttention(false);
    }

    if (currentValue > props.totalPages) {
      props.updateJumpPage(props.totalPages);
      return;
    }

    props.updateJumpPage(currentValue);
  }

  const indexInput = useRef();

  const changePage = (e) => {
    e.preventDefault();

    if (+indexInput.current.value !== 0) {
      props.setLoadingState(true);
      props.updateJumpPage('');
      props.clearUsers();
      props.setCurrentPage(+indexInput.current.value);
    }
  }

  return (
    <div className='users__pagination-wrapper'>
      <ul className='users__pagination-list'>
        <PaginationRouter
          totalPages={props.totalPages}
          pages={props.currentPage}
          firstPage={props.firstPage}
          isStart={true}
        />
        <PaginationRouter
          totalPages={props.totalPages}
          pages={props.currentPage}
          firstPage={props.firstPage}
          isStart={false}
        />
      </ul>
      <div className='users__search-page-wrapper'>
        <form onSubmit={changePage}>
          <label>
            Jump to page:
            <input
              type='number'
              disabled={props.isLoading}
              value={props.jumpToPage}
              onChange={onChange}
              onKeyDown={props.onKeyDown(props.setCurrentPage, indexInput)}
              ref={indexInput}
              name='pageIndex'
              className='users__pagination-index-field'
            />
          </label>
          <input
            type='submit'
            value={props.jumpToPageText}
            className='users__pagination-submit'
          />
        </form>
        {!props.isLoading && (
          <p className={props.maxJumpIndexAttention ? 'users__pagination-info users__pagination-info--attention' : 'users__pagination-info'}>
            {props.maxJumpLengthText} {`${props.totalPages}`.length}
          </p>
        )}
      </div>
    </div>
  );
}

export { Pagination }
