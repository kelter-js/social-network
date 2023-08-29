import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import App from './App';
import store from './state/reduxStore';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

jest.mock("react-query", () => ({
  useQuery: jest
    .fn()
    .mockReturnValue({ data: {}, isLoading: false, error: {} }),
}));

test('should render component without crash', () => {
  render(
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
});

