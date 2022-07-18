import React, { useRef } from 'react';
import { Profile } from './profile/profile.js';
import { FeedList } from './feed/feedList.js';
import { Loading } from '../../../loading.js';

const MainPageContent = ({
  pageContent,
  handlers,
  changeText,
  addPost,
  isLoading,
}) => {
  const textAreaElement = useRef();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Profile
            user={pageContent.currentUser}
            annotations={pageContent.defaultAnnotations}
            templates={pageContent.defaultTemplates}
            jobIcons={pageContent.jobIcons}
            titles={pageContent.lookingForJobTitle}
          />
          <form onSubmit={handlers.onSubmit(addPost)} className='page-main__news'>
            <label className='news__label'>
              {pageContent.feedDefaultText}
              <textarea
                className='news__message'
                ref={textAreaElement}
                value={(pageContent.currentText === undefined) ? pageContent.defaultText : pageContent.currentText}
                name='newsMessage'
                onChange={(e) => changeText(e.target.value, pageContent.eventType)}
                onBlur={handlers.onBlur(changeText, pageContent.defaultText, pageContent.currentText, pageContent.eventType)}
                onFocus={handlers.onFocus(changeText, pageContent.currentText, pageContent.eventType)}
                onKeyDown={handlers.onEnter(addPost, textAreaElement)}
              />
            </label>
            <input
              className='news__submit'
              type='submit'
              value={pageContent.sendPost}
              disabled={!pageContent.currentText}
            />
          </form>
          {pageContent.currentUser.feed && (
            <div className='page-feed'>
              <FeedList feed={pageContent.currentUser.feed} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { MainPageContent }
