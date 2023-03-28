import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import authorizeUser from '../../thunk/authorizeUser';
import LoginForm from './LoginForm';
import { getLoadingState, getAuthenticatingState } from '../../state/selectors/serviceSelectors';
import { getLoginError } from '../../state/selectors/userSelectors';

const mapStateToProps = (state) => ({
  isLoading: getLoadingState(state),
  isLoginFailed: getLoginError(state),
  isAuthenticating: getAuthenticatingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  authorize: (data) => dispatch(authorizeUser(data)),
});

const Login = ({
  isLoading,
  authorize,
  isLoginFailed,
  isAuthenticating,
}) => {
  return (
    (isAuthenticating) ? (
      <Loading title='Please wait, initialising...' />
    ) : (
      <div className='container' data-testid='login-form-container'>
        <LoginForm isLoginFailed={isLoginFailed} handler={authorize} loading={isLoading} />
      </div >
    )
  );
};

export const LoginComponent = Login;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
