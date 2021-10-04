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
          handlers = {props.handlers}
          pageContent = {props.pageContent}
          addPost = {props.addPost}
          addMessage = {props.addMessage}
          chat = {props.chat}
          menu = {props.menu}
          paths={props.paths}
          headers = {props.headers}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
