import React, { useState } from 'react'
import { Profile } from './profile/profile.js'
import { FeedList } from './feed/feed-list.js'

const MainPageContent = (props) => {
  let [currentValue, valueUpdater] = useState(props.message);

  const onChange = (e) => {
    valueUpdater(e.target.value);
  }

  const onFocus = () => {
    if (currentValue !== props.message) {
      return;
    }
    valueUpdater('');
  }

  const onBlur = () => {
    if (!currentValue) {
      valueUpdater(props.message);
      return;
    }

    if (currentValue !== props.message) {
      return;
    }

    valueUpdater(props.message)
  }

  return (
    <div>
      <Profile data={props.user} />
      <form className='page-main__news'>
        <label className='news__label'>
          Share news with your friends!
          <textarea className='news__message' value={currentValue} id='newsMessage' onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
        </label>
        <input className='news__submit' type="submit" value="Отправить" />
      </form>
      <div className='page-feed'>
        <FeedList feed={props.feed} />
      </div>
    </div>
  );
}

export { MainPageContent }
