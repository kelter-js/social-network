import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js'
import './sass/style.sass';

ReactDOM.render(
  <ErrorCatcher>
    <App />
  </ErrorCatcher>,
  document.querySelector('.root')
);
