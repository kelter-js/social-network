import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const Loading = ({ title, shouldBeCentered }) => {
  return (
    <Stack
      className={shouldBeCentered ? 'loading-animation' : ''}
      justifyContent='center'
      alignItems='center'
      data-testid='loading-container'
    >
      <h2 data-testid='loading-text'>{title}</h2>
      <CircularProgress size={150} />
    </Stack>
  );
}

export default Loading;
