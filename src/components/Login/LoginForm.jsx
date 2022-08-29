import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";

const LoginForm = ({
  isLoading,
  handler
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handler(data);
      })}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <label htmlFor='login'>
        User login
      </label>
      <input {...register("email")} type='email' id='login' />
      <label htmlFor='login'>
        User password
      </label>
      <input {...register("password")} type='password' id='pass' />
      <LoadingButton
        style={{ backgroundColor: '#00308F', marginTop: 25 }}
        variant='contained'
        type='submit'
        loading={isLoading}>
        Log in
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
