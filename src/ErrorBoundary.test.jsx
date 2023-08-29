import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

jest.mock("react-query", () => ({
  useQuery: jest
    .fn()
    .mockReturnValue({ data: {}, isLoading: false, error: {} }),
}));

test('should render component without crash', () => {
  render(
    <ErrorBoundary>
      <></>
    </ErrorBoundary>
  );
});
