import React, { useState } from 'react'
import { Profile } from './profile/profile.js'
import { FeedList } from './feed/feed-list.js'

const MainPageContent = (props) => {
  let [currentValue, valueUpdater] = useState(props.defaultText);

  const textArea = React.createRef();

  const addPost = () => {
    props.addPost(currentValue, valueUpdater);
  }
  return (
    <div>
      <Profile data={props.user} />
      <form onSubmit = {props.handlers.onSubmit(addPost)} className='page-main__news'>
        <label className='news__label'>
          Share news with your friends!
          <textarea
            className='news__message'
            ref={textArea}
            value={currentValue}
            name='newsMessage'
            onChange={props.handlers.onChange(valueUpdater)}
            onBlur={props.handlers.onBlur(valueUpdater, props.defaultText, currentValue)}
            onFocus={props.handlers.onFocus(valueUpdater, props.defaultText, currentValue)}
            onKeyDown={props.handlers.onEnter(addPost, textArea)}
          />
        </label>
        <input className='news__submit' type="submit" value="Отправить"/>
      </form>
      <div className='page-feed'>
        <FeedList feed={props.feed} />
      </div>
    </div>
  );
}

export { MainPageContent }
