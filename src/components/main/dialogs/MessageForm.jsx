import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  messageText: yup.string().trim().required('Your message should not be empty'),
}).required();

const MessageForm = ({ placeholder, sendMessage }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (text) => {
    sendMessage(text);
    reset({ messageText: '' });
  }

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data.messageText))}
      className='page-main__dialogs-form'
    >
      <label className='page-main__dialogs-label' data-testid='new-message-label'>
        {placeholder}
        <textarea
          {...register('messageText')}
          className='page-main__dialogs-text'
          name='messageText'
          data-testid='new-message-text'
          placeholder='...type your message here.'
        />
        <ErrorMessage errors={errors} name='messageText' />
      </label>
      <button
        className='page-main__send-message'
        type='submit'
        data-testid='send-new-message'
      />
    </form>
  );
};

export default MessageForm;
