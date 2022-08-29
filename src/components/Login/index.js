import React from 'react';
import authorizeUser from '../../thunk/authorizeUser';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => ({ isLoading: state.isLoading });

const mapDispatchToProps = (dispatch) => ({
  authorize: (data) => dispatch(authorizeUser(data)),
});

const Login = ({
  isLoading,
  authorize,
}) => {
  return (
    <div className='container'>
      <LoginForm handler={authorize} loading={isLoading} />
    </div >
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
