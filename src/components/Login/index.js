import React from 'react';

const Login = () => {
  return (
    <div className='container'>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor='login'>
          User login
        </label>
        <input type='text' id='login'/>
        <label htmlFor='login'>
          User password
        </label>
        <input type='text' id='pass'/>
        <button type='submit'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
