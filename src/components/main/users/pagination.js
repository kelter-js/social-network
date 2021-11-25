import React, { useRef } from 'react';
import { PaginationRouter } from './paginationRouter.js';

const Pagination = (props) => {
  const onChange = (e) => {
    props.updateJumpIndex(e.target.value);
  }

  const indexInput = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    props.setCurrentPage(indexInput.current.value);
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
        <form onSubmit={onSubmit}>
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
