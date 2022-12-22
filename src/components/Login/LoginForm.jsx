import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TextField, Alert, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import useCallback from '../../hooks/useCallback';

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum'),
  rememberMe: yup.boolean(),
}).required();

const LoginForm = ({ isLoading, handler, isLoginFailed }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(isLoginFailed);

  useCallback(() => setError(isLoginFailed), [isLoginFailed]);

  const onChange = () => {
    if (error) {
      setError(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setError(null);
        handler(data);
      })}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField {...register('email', { onChange })} style={{ marginBottom: 15 }} label='User login' type='email' id='login' />
      <ErrorMessage errors={errors} name='email' />

      <TextField {...register('password', { onChange })} label='User password' type='password' id='pass' />
      <ErrorMessage errors={errors} name='password' />

      <FormGroup>
        <FormControlLabel control={<Checkbox {...register('rememberMe')} />} label='Remember me' />
      </FormGroup>

      {error && <Alert severity='error'>{error}</Alert>}

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
