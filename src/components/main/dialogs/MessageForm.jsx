import React from 'react';
import { useForm } from "react-hook-form";

const MessageForm = ({ messageInfo, sendMessage }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (text) => {
    sendMessage(text);
    reset({ messageText: "" });
  }

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data.messageText))}
      className='page-main__dialogs-form'
    >
      <label className='page-main__dialogs-label'>
        {messageInfo}
        <textarea
          {...register("messageText")}
          className='page-main__dialogs-text'
          name='messageText'
          placeholder='...type your message here.'
        />
      </label>
      <button
        className='page-main__send-message'
        type='submit'
      />
    </form>
  );
};

export default MessageForm;
