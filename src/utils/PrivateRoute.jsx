import React from 'react';
import Main from '../components/main/MainContainer';

const PrivateRoute = ({ content }) => {
  return (<Main mainContent={content} />);
};

export default PrivateRoute;
