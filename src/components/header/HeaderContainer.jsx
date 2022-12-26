import { connect } from 'react-redux';
import Header from './Header';
import React from 'react';
import logout from '../../thunk/logout';
import { getCurrentUserData } from '../../state/selectors/userSelectors';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout),
});

const HeaderContainer = ({ authenticate, logout, ...props }) => {
  return (<Header {...props} onLogout={logout} />);
}

const mapStateToProps = (state) => ({ userData: getCurrentUserData(state) });

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
