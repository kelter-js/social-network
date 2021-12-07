import React from 'react';
import { ProfileData } from './profileData.js';

const Profile = (props) => {
  return (
    <>
      <img alt='Основное изображение профиля' className='profile__main-avatar' src={props.data.mainAvatar} />
      <div className='profile__wrapper'>
        <div className='profile__avatar-wrapper'>
          <img alt='Фотография пользователя' className='profile__avatar' src={props.data.profileAvatar} />
        </div>
        <div className='profile__info-wrapper'>
          <h3 className='profile__name'>{props.data.userName}</h3>
          <ul className='profile__user-list'>
            <ProfileData data={props.data.userData} />
          </ul>
        </div>
      </div>
    </>
  );
}

export { Profile }
