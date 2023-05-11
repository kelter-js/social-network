import React from 'react';
import Status from '../../../../common/Status/Status';

const Profile = ({
  user,
  annotations,
  templates,
  jobIcons,
  titles
}) => {
  const contacts = (user?.contacts?.length === 0) ? (templates.contacts) : (
    <ul className='profile__user-links-list'>
      {user?.contacts?.map((item, index) => {
        const itemClass = `profile__user-contact profile__user-contact--${item[0]}`;
        const link = String(item[1]).includes('https://') ? item[1] : `https://${item[1]}`;
        return (
          <li className={itemClass} key={index}>
            <a rel='noreferrer' href={link} className='profile__user-link' target='_blank'>
              {item[1]}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <img alt='Main profile' className='profile__main-avatar' src={user?.photos?.large} />
      <div className='profile__wrapper'>
        <div className='profile__avatar-wrapper'>
          <img alt='User' className='profile__avatar' src={user?.photos?.small} />
        </div>
        <div className='profile__info-wrapper'>
          <div className='profile__name'>
            <h3>{user?.fullName}</h3>
            <Status />
          </div>
          <div className='profile__text-wrapper profile__text-wrapper--job'>
            <div>
              <p className='profile__user-text' data-testid='profile-annotation'>
                {annotations.userInfo}
              </p>
              <p className='profile__user-text' data-testid='profile-template-aboutMe'>
                {user?.aboutMe || templates.aboutMe}
              </p>
            </div>
            <img
              alt='Job searching status'
              className='profile__job-status'
              src={user?.lookingForAJob ? jobIcons.lookingForJobIcon : jobIcons.dontLookForJobIcon}
              title={user?.lookingForAJob ? titles.yes : titles.no}
              data-testid='looking-for-jon-icon'
            />
          </div>
          <div className='profile__text-wrapper'>
            <p className='profile__user-text' data-testid='profile-skills'>
              {annotations.skills}
            </p>
            <p className='profile__user-text' data-testid='profile-template-lookingForJob'>
              {user?.lookingForAJobDescription || templates.skills}
            </p>
          </div>
          <div className='profile__text-wrapper'>
            <p className='profile__user-text' data-testid='profile-contacts'>
              {annotations.contacts}
            </p>
            {contacts}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
