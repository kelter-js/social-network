import { connect } from "react-redux";
import { Header } from "./index.js";
import React from 'react';

const HeaderContainer = ({authenticate, ...props}) => {
  return (
    <Header {...props} />
  );
}

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps)(HeaderContainer);
