import React from 'react';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';

const PostCreationForm = ({ defaultText, addPost }) => {
  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = (text) => {
    addPost(text);
    reset({ postText: "" });
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data.postText))} className='page-main__news'>
      <label className='news__label'>
        {defaultText}

        <textarea
        {...register("postText")}
          className='news__message'
          placeholder='...start your message here.'
        />
      </label>

      <Button
        variant="contained"
        color="success"
        type='submit'>
        Send new post
      </Button>
    </form>
  );
};

export default PostCreationForm;
