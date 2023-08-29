import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ComponentRouter from './ComponentRouter';
import store from './state/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultMenuPaths } from './state/initialState';

jest.mock("react-query", () => ({
  useQuery: jest
    .fn()
    .mockReturnValue({ data: {}, isLoading: false, error: {} }),
}));

test('should render component without crash', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ComponentRouter paths={defaultMenuPaths} />
      </Provider>
    </BrowserRouter>
  );
});

