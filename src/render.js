import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app.js'
import { ErrorCatcher } from './error.js'

const render = (store) => {
  ReactDOM.render(
    <ErrorCatcher>
      <App
        store = {store.store}
        dispatch = {store.dispatch}
      />
    </ErrorCatcher>,
    document.querySelector('.root')
  );
}

export { render }
