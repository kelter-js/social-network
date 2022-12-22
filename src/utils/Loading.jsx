import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const Loading = ({ title, shouldBeCentered }) => {
  return (
    <Stack
      className={shouldBeCentered ? 'loading-animation' : ''}
      justifyContent='center'
      alignItems='center'
    >
      <h2>{title}</h2>
      <CircularProgress size={150} />
    </Stack>
  );
}

export default Loading;
