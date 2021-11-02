import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.js';
import { ErrorCatcher } from './error.js';
import { Provider } from 'react-redux';

const render = (store) => {
  ReactDOM.render(
    <ErrorCatcher>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorCatcher>,
    document.querySelector('.root')
  );
}

export { render }
