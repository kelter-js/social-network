import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
}).required();

const LoginForm = ({
  isLoading,
  handler
}) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

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
      <ErrorMessage errors={errors} name="email" />
      <label htmlFor='login'>
        User password
      </label>
      <input {...register("password")} type='password' id='pass' />
      <ErrorMessage errors={errors} name="password" />
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
