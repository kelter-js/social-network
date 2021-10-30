import React from 'react';
import { Profile } from './profile/profile.js';
import { FeedList } from './feed/feedList.js';

const MainPageContent = (props) => {
  return (
    <div>
      <Profile data={props.user} />
      <form onSubmit = {props.handlers.onSubmit(props.addPost)} className='page-main__news'>
        <label className='news__label'>
          Share news with your friends!
          <textarea
            className='news__message'
            ref={props.textAreaElement}
            value={(props.currentText === undefined) ? props.defaultText : props.currentText}
            name='newsMessage'
            onChange={(e) => props.changeText(e.target.value)}
            onBlur={props.handlers.onBlur(props.changeText, props.defaultText, props.currentText)}
            onFocus={props.handlers.onFocus(props.changeText, props.currentText)}
            onKeyDown={props.handlers.onEnter(props.addPost, props.textAreaElement)}
          />
        </label>
        <input className='news__submit' type="submit" value="Отправить"/>
      </form>
      <div className='page-feed'>
        <FeedList
          feed={props.feed}
          actionManager={props.actionManager}
          dispatch = {props.dispatch}
          />
      </div>
    </div>
  );
}

export { MainPageContent }
