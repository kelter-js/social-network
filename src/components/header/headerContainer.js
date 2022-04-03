import { connect } from "react-redux";
import { Header } from "./index.js";
import React, { useEffect } from 'react';
import authenticateUser from "../../thunk/authenticateUser";

const HeaderContainer = (props) => {
  useEffect(props.authenticate, []);

  return (
    <Header {...props} />
  );
}

const mapStateToProps = (state) => ({ userData: state.userData });
const mapDispatchToProps = (dispatch) => ({authenticate: () => dispatch(authenticateUser)});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
