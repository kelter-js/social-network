import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js'
import { store } from './store.js'
import './sass/style.sass';

ReactDOM.render(
  <ErrorCatcher>
    <App store = {store.store}/>
  </ErrorCatcher>,
  document.querySelector('.root')
);
