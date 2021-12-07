import React, { useRef } from 'react';
import { Profile } from './profile/profile.js';
import { FeedList } from './feed/feedList.js';

const MainPageContent = (props) => {
  const textAreaElement = useRef();
  return (
    <div>
      <Profile data={props.pageContent.userData} />
      <form onSubmit = {props.handlers.onSubmit(props.addPost)} className='page-main__news'>
        <label className='news__label'>
          {props.pageContent.feedDefaultText}
          <textarea
            className='news__message'
            ref={textAreaElement}
            value={(props.pageContent.currentText === undefined) ? props.pageContent.defaultText : props.pageContent.currentText}
            name='newsMessage'
            onChange={(e) => props.changeText(e.target.value, props.pageContent.eventType)}
            onBlur={props.handlers.onBlur(props.changeText, props.pageContent.defaultText, props.pageContent.currentText, props.pageContent.eventType)}
            onFocus={props.handlers.onFocus(props.changeText, props.pageContent.currentText, props.pageContent.eventType)}
            onKeyDown={props.handlers.onEnter(props.addPost, textAreaElement)}
          />
        </label>
        <input className='news__submit' type='submit' value={props.pageContent.sendPost}/>
      </form>
      <div className='page-feed'>
        <FeedList feed={props.pageContent.feed}/>
      </div>
    </div>
  );
}

export { MainPageContent }
