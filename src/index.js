import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js'
import { Constants } from './constants.js'
import './sass/style.sass';

ReactDOM.render(
  <ErrorCatcher>
    <App
      pageContent = {Constants.pageContent}
      chat = {Constants.chat}
      menu = {Constants.defaultMenu}
      paths={Constants.defaultMenuPaths}
      headers = {Constants.headers}
    />
  </ErrorCatcher>,
  document.querySelector('.root')
);
