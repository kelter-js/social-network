import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

test('should render component without crash', () => {
  render(
    <ErrorBoundary>
      <></>
    </ErrorBoundary>
  );
});
