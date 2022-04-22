import React from 'react';
import { MainContainer } from "../components/main/indexContainer";

const PrivateRoute = ({ Component }) => {
  return (
    <MainContainer ComponentToRender={Component} />
  );
};

export default PrivateRoute;
