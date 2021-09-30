import React, { useState } from 'react'
import { Profile } from './profile/profile.js'
import { FeedList } from './feed/feed-list.js'
import { InputHandlers } from '../../../service.js'

const MainPageContent = (props) => {
  let [currentValue, valueUpdater] = useState(props.defaultText);

  return (
    <div>
      <Profile data={props.user} />
      <form className='page-main__news'>
        <label className='news__label'>
          Share news with your friends!
          <textarea
            className='news__message'
            value={currentValue}
            name='newsMessage'
            onChange={InputHandlers.onChange(valueUpdater)}
            onBlur={InputHandlers.onBlur(valueUpdater, props.defaultText, currentValue)}
            onFocus={InputHandlers.onFocus(valueUpdater, props.defaultText, currentValue)}
          />
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
