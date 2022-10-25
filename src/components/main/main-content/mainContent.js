import React from 'react';
import { Profile } from './profile/profile.js';
import { FeedList } from './feed/feedList.js';
import { Loading } from '../../../loading.js';
import PostCreationForm from './PostCreationForm.jsx';

const MainPageContent = ({
  pageContent,
  addPost,
  isLoading,
}) => {

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

          <PostCreationForm
            defaultText={pageContent.feedDefaultText}
            addPost={addPost}
          />

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
