import React from 'react';
import PageContainer from './pageContainer.js';

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
      <PageContainer currentPage={pages} disable={true} currentPageStyle='users__select-page--current'/>
      <PageContainer currentPage={pages + 1} disable={isLoading}/>
      <PageContainer currentPage={pages + 2} disable={isLoading}/>
      <li className='users__pagination-item'><p>...</p></li>
    </>
  );

  const isSecondary = (pages !== (firstPage + 1));
  const isPenult = (pages !== (totalPages - 1));

  const middleRoute = (
    <>
      {isSecondary && <PageContainer currentPage={firstPage} disable={isLoading}/>}
      {isSecondary && <li className='users__pagination-item'><p>...</p></li>}
      <PageContainer currentPage={pages - 1} disable={isLoading}/>
      <PageContainer currentPage={pages} disable={true} currentPageStyle='users__select-page--current'/>
      <PageContainer currentPage={pages + 1} disable={isLoading}/>
      {isPenult && <li className='users__pagination-item'><p>...</p></li>}
      {isPenult && <PageContainer currentPage={totalPages} disable={isLoading}/>}
    </>
  );

  const endRoute = (
    <>
      <li className='users__pagination-item'><p>...</p></li>
      <PageContainer currentPage={pages - 2} disable={isLoading}/>
      <PageContainer currentPage={pages - 1} disable={isLoading}/>
      <PageContainer currentPage={pages} disable={true} currentPageStyle='users__select-page--current'/>
    </>
  );

  switch (pages) {
    case totalPages:
      return (isStart) ? (<PageContainer currentPage={firstPage} disable={isLoading}/>) : endRoute;
    case firstPage:
      return (isStart) ? startRoute : (<PageContainer currentPage={totalPages} disable={isLoading}/>);
    default:
      return middleRoute;
  }
}

export { PaginationRouter }
