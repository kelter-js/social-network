import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';

const schema = yup.object({
  postText: yup.string().trim().required('Your message should not be empty'),
}).required();

const PostCreationForm = ({ defaultText, addPost }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (text) => {
    addPost(text);
    reset({ postText: '' });
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data.postText))} className='page-main__news'>
      <label className='news__label'>
        {defaultText}

        <textarea
          {...register('postText')}
          className='news__message'
          placeholder='...start your message here.'
        />
        <ErrorMessage errors={errors} name='postText' />
      </label>

      <Button
        variant='contained'
        color='success'
        type='submit'>
        Send new post
      </Button>
    </form>
  );
};

export default PostCreationForm;
