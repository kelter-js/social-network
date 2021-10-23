import React from 'react'
import { Profile } from './profile/profile.js'
import { FeedList } from './feed/feed-list.js'

const MainPageContent = (props) => {
  const textArea = React.createRef();

  const addPost = () => {
    props.interaction.dispatch(props.interaction.createActionPost());
  }

  const changeText = (text) => {
    props.interaction.dispatch(props.interaction.createActionChangeTextPost(text));
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
            value={(props.currentText === undefined) ? props.defaultText : props.currentText}
            name='newsMessage'
            onChange={(e) => changeText(e.target.value)}
            onBlur={props.handlers.onBlur(changeText, props.defaultText, props.currentText)}
            onFocus={props.handlers.onFocus(changeText, props.currentText)}
            onKeyDown={props.handlers.onEnter(addPost, textArea)}
          />
        </label>
        <input className='news__submit' type="submit" value="Отправить"/>
      </form>
      <div className='page-feed'>
        <FeedList feed={props.feed} interaction={props.interaction}/>
      </div>
    </div>
  );
}

export { MainPageContent }
