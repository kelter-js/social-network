import { connect } from "react-redux";
import { Header } from "./index.js";
import React from 'react';
import logout from '../../thunk/logout';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout),
});

const HeaderContainer = ({ authenticate, logout, ...props }) => {
  return (
    <Header {...props} onLogout={logout} />
  );
}

const mapStateToProps = (state) => ({ userData: state.userData });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
