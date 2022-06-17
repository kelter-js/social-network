import React from 'react';
import authorizeUser from '../../thunk/authorizeUser';
import { setLoginData } from '../../state/actionManager';
import { connect } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';

const mapStateToProps = (state) => ({ isLoading: state.isLoading });

const mapDispatchToProps = (dispatch) => ({
  authorize: () => dispatch(authorizeUser),
  setLoginData: (data) => dispatch(setLoginData(data)),
});

const Login = ({
  isLoading,
  authorize,
  setLoginData
}) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    setLoginData({
      name: target.name,
      value: target.value,
    });
  };
  const onLogin = (e) => {
    e.preventDefault();
    authorize();
  };
  return (
    <div className='container'>
      <form onSubmit={onLogin} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='login'>
          User login
        </label>
        <input type='email' id='login' name='email' onChange={onChangeHandler} />
        <label htmlFor='login'>
          User password
        </label>
        <input type='password' id='pass' name='password' onChange={onChangeHandler} />
        <LoadingButton
          style={{ backgroundColor: '#00308F', marginTop: 25 }}
          variant='contained'
          type='submit'
          loading={isLoading}>
          Log in
        </LoadingButton>
      </form>
    </div >
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
