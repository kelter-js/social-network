import React from 'react'
import { Header } from './components/header/index.js'
import { Main } from './components/main/index.js'
import { Footer } from './components/footer/index.js'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
