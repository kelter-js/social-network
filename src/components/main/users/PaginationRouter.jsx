import React, { memo } from 'react';
import UsersPage from './UsersPageContainer';

const PaginationRouter = ({
  pages,
  totalPages,
  firstPage,
  isStart,
  isLoading,
}) => {

  if (pages !== totalPages && pages !== firstPage && !isStart) {
    return null;
  }

  const startRoute = (
    <>
      <UsersPage currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
      <UsersPage currentPage={pages + 1} disable={isLoading} />
      <UsersPage currentPage={pages + 2} disable={isLoading} />
      <li className='users__pagination-item' data-testid='pagination-start-ellipsis'><p>...</p></li>
    </>
  );

  const isSecondary = (pages !== (firstPage + 1));
  const isPenult = (pages !== (totalPages - 1));

  const middleRoute = (
    <>
      {isSecondary && <UsersPage currentPage={firstPage} disable={isLoading} />}
      {isSecondary && <li className='users__pagination-item' data-testid='pagination-middle-ellipsis'><p>...</p></li>}
      <UsersPage currentPage={pages - 1} disable={isLoading} />
      <UsersPage currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
      <UsersPage currentPage={pages + 1} disable={isLoading} />
      {isPenult && <li className='users__pagination-item'><p>...</p></li>}
      {isPenult && <UsersPage currentPage={totalPages} disable={isLoading} />}
    </>
  );

  const endRoute = (
    <>
      <li className='users__pagination-item' data-testid='pagination-end-ellipsis'><p>...</p></li>
      <UsersPage currentPage={pages - 2} disable={isLoading} />
      <UsersPage currentPage={pages - 1} disable={isLoading} />
      <UsersPage currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
    </>
  );

  switch (pages) {
    case totalPages:
      return (isStart) ? (<UsersPage currentPage={firstPage} disable={isLoading} />) : endRoute;
    case firstPage:
      return (isStart) ? startRoute : (<UsersPage currentPage={totalPages} disable={isLoading} />);
    default:
      return middleRoute;
  }
}

export default memo(PaginationRouter);
