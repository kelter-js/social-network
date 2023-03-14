import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Fallback from './Fallback';

test('should render component without crash', () => {
  render(<Fallback />);
});
