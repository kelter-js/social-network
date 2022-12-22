import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/reduxStore';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './sass/style.sass';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.querySelector('.root')
);
