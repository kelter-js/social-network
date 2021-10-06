import React from 'react'
import { Header } from './components/header/index.js'
import { Main } from './components/main/index.js'
import { Footer } from './components/footer/index.js'
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Main
          store = {props.store}
          dispatch = {props.dispatch}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
