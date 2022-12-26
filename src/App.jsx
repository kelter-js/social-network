import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authenticateUser from './thunk/authenticateUser';
import ComponentRouter from './ComponentRouter';
import useCallback from './hooks/useCallback';
import useInitiatePath from './hooks/useInitiatePath';
import { getMenuPaths, getAuthenticationState } from './state/selectors/serviceSelectors';

const mapStateToProps = (state) => ({
  defaultMenuPaths: getMenuPaths(state),
  isAuthenticated: getAuthenticationState(state),
});
const mapDispatchToProps = (dispatch) => ({ authenticate: () => dispatch(authenticateUser) });

const App = ({
  defaultMenuPaths,
  authenticate,
  isAuthenticated
}) => {
  const history = useHistory();
  const redirectPath = useInitiatePath(history);

  const redirectByCredentials = () => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      if (history.location.pathname === '/login') {
        history.push(redirectPath ?? '/profile');
      }
    }
  };

  useCallback(authenticate);
  useCallback(redirectByCredentials, [isAuthenticated]);

  return (<ComponentRouter paths={defaultMenuPaths} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
