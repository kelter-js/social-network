import React from 'react';
import Status from '../../../../common/Status/Status';

const Profile = ({
  user,
  annotations,
  templates,
  jobIcons,
  titles,
}) => {
  const contacts = (user.contacts.length === 0) ? (
    templates.contacts
  ) : (
    <ul className='profile__user-links-list'>
      {user.contacts.map((item, index) => {
        const itemClass = `profile__user-contact profile__user-contact--${item[0]}`;
        return (
          <li className={itemClass} key={index}>
            <a href={item[1]} className='profile__user-link' target='_blank'>
              {item[1]}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <img alt='Main profile' className='profile__main-avatar' src={user.photos.large} />
      <div className='profile__wrapper'>
        <div className='profile__avatar-wrapper'>
          <img alt='User' className='profile__avatar' src={user.photos.small} />
        </div>
        <div className='profile__info-wrapper'>
          <div className='profile__name'>
            <h3>{user.fullName}</h3>
            <Status />
          </div>
          <div className='profile__text-wrapper profile__text-wrapper--job'>
            <div>
              <p className='profile__user-text'>
                {annotations.userInfo}
              </p>
              <p className='profile__user-text'>
                {user.aboutMe || templates.aboutMe}
              </p>
            </div>
            <img
              alt='Job searching status'
              className='profile__job-status'
              src={user.lookingForAJob ? jobIcons.lookingForJobIcon : jobIcons.dontLookForJobIcon}
              title={user.lookingForAJob ? titles.yes : titles.no}
            />
          </div>
          <div className='profile__text-wrapper'>
            <p className='profile__user-text'>
              {annotations.skills}
            </p>
            <p className='profile__user-text'>
              {user.lookingForAJobDescription || templates.skills}
            </p>
          </div>
          <div className='profile__text-wrapper'>
            <p className='profile__user-text'>
              {annotations.contacts}
            </p>
            {contacts}
          </div>
        </div>
      </div>
    </>
  );
}

export { Profile }
