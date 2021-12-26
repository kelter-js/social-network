import React from 'react';
import HeaderContainer from './components/header/headerContainer';
import { MainContainer } from './components/main/indexContainer.js';
import { Footer } from './components/footer/index.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <MainContainer />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
