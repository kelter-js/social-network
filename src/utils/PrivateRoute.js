import React from 'react';
import Main from "../components/main/indexContainer";

const PrivateRoute = ({ Component }) => {
  return (
    <Main ComponentToRender={Component} />
  );
};

export default PrivateRoute;
