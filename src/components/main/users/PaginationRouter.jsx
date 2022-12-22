import React from 'react';
import Page from './PageContainer';

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
      <Page currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
      <Page currentPage={pages + 1} disable={isLoading} />
      <Page currentPage={pages + 2} disable={isLoading} />
      <li className='users__pagination-item'><p>...</p></li>
    </>
  );

  const isSecondary = (pages !== (firstPage + 1));
  const isPenult = (pages !== (totalPages - 1));

  const middleRoute = (
    <>
      {isSecondary && <Page currentPage={firstPage} disable={isLoading} />}
      {isSecondary && <li className='users__pagination-item'><p>...</p></li>}
      <Page currentPage={pages - 1} disable={isLoading} />
      <Page currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
      <Page currentPage={pages + 1} disable={isLoading} />
      {isPenult && <li className='users__pagination-item'><p>...</p></li>}
      {isPenult && <Page currentPage={totalPages} disable={isLoading} />}
    </>
  );

  const endRoute = (
    <>
      <li className='users__pagination-item'><p>...</p></li>
      <Page currentPage={pages - 2} disable={isLoading} />
      <Page currentPage={pages - 1} disable={isLoading} />
      <Page currentPage={pages} disable={true} currentPageStyle='users__select-page--current' />
    </>
  );

  switch (pages) {
    case totalPages:
      return (isStart) ? (<Page currentPage={firstPage} disable={isLoading} />) : endRoute;
    case firstPage:
      return (isStart) ? startRoute : (<Page currentPage={totalPages} disable={isLoading} />);
    default:
      return middleRoute;
  }
}

export default PaginationRouter;
