import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js';
import { storeRedux } from './state/reduxStore.js';

const render = (store) => {
  ReactDOM.render(
    <ErrorCatcher>
      <App
        store = {store}
        dispatch = {storeRedux.dispatch.bind(storeRedux)}
      />
    </ErrorCatcher>,
    document.querySelector('.root')
  );
}

export { render }
