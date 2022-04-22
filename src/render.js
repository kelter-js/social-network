import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { ErrorCatcher } from './error.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const render = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <ErrorCatcher>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorCatcher>
    </BrowserRouter>,
    document.querySelector('.root')
  );
}

export { render }
