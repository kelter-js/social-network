import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authenticateUser from "./thunk/authenticateUser";
import ComponentRouter from "./router";

const mapStateToProps = (state) => ({
  defaultMenuPaths: state.defaultMenuPaths,
  isAuthenticated: state.userData.isAuthenticated,
});
const mapDispatchToProps = (dispatch) => ({ authenticate: () => dispatch(authenticateUser) });

const App = ({
  defaultMenuPaths,
  authenticate,
  isAuthenticated
}) => {
  const history = useHistory();

  useEffect(authenticate, []);

  const renderByCredentials = () => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      if (history.location.pathname === '/login') {
        history.push('/profile');
      }
    }
  };

  useEffect(() => {
    renderByCredentials();
  }, [isAuthenticated]);

  return (<ComponentRouter paths={defaultMenuPaths} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
