import React from 'react';
import { PageContainer } from './pageContainer.js';

const PaginationRouter = (props) => {
  if (props.pages !== props.totalPages && props.pages !== props.firstPage && !props.isStart) {
    return null;
  }

  const startRoute = (
    <>
      <PageContainer currentPage={props.pages} disable={true} currentPageStyle='users__select-page--current'/>
      <PageContainer currentPage={props.pages + 1}/>
      <PageContainer currentPage={props.pages + 2}/>
      <li className='users__pagination-item'><p>...</p></li>
    </>
  );

  const isSecondary = (props.pages !== (props.firstPage + 1));
  const isPenult = (props.pages !== (props.totalPages - 1));

  const middleRoute = (
    <>
      {isSecondary && <PageContainer currentPage={props.firstPage}/>}
      {isSecondary && <li className='users__pagination-item'><p>...</p></li>}
      <PageContainer currentPage={props.pages - 1}/>
      <PageContainer currentPage={props.pages} disable={true} currentPageStyle='users__select-page--current'/>
      <PageContainer currentPage={props.pages + 1}/>
      {isPenult && <li className='users__pagination-item'><p>...</p></li>}
      {isPenult && <PageContainer currentPage={props.totalPages}/>}
    </>
  );

  const endRoute = (
    <>
      <li className='users__pagination-item'><p>...</p></li>
      <PageContainer currentPage={props.pages - 2}/>
      <PageContainer currentPage={props.pages - 1}/>
      <PageContainer currentPage={props.pages} disable={true} currentPageStyle='users__select-page--current'/>
    </>
  );

  switch (props.pages) {
    case props.totalPages:
      return (props.isStart) ? (<PageContainer currentPage={props.firstPage} />) : endRoute;
    case props.firstPage:
      return (props.isStart) ? startRoute : (<PageContainer currentPage={props.totalPages} />);
    default:
      return middleRoute;
  }
}

export { PaginationRouter }
