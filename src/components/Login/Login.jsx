import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import authorizeUser from '../../thunk/authorizeUser';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isLoginFailed: state.userData.loginError,
  isAuthenticating: state.isAuthenticating,
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
    isAuthenticating ? (
      <Loading title='Please wait, initialising...' />
    ) : (
      <div className='container'>
        <LoginForm isLoginFailed={isLoginFailed} handler={authorize} loading={isLoading} />
      </div >
    )
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
