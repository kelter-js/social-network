import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ComponentRouter from './ComponentRouter';
import store from './state/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultMenuPaths } from './state/initialState';

test('should render component without crash', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ComponentRouter paths={defaultMenuPaths} />
      </Provider>
    </BrowserRouter>
  );
});

