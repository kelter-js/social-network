import React from 'react';
import { Header } from './components/header/index.js';
import { MainContainer } from './components/main/indexContainer.js';
import { Footer } from './components/footer/index.js';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <MainContainer
          {...props}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
