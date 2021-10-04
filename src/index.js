import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js'
import { State } from './state.js'
import { InputHandlers } from './service.js'
import './sass/style.sass';

const currentState = new State();

ReactDOM.render(
  <ErrorCatcher>
    <App
      handlers = {InputHandlers}
      pageContent = {currentState.pageContent}
      addPost = {currentState.addPost}
      addMessage = {currentState.addMessage}
      chat = {currentState.chat}
      menu = {currentState.defaultMenu}
      paths={currentState.defaultMenuPaths}
      headers = {currentState.headers}
    />
  </ErrorCatcher>,
  document.querySelector('.root')
);
