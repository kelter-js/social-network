import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const User = ({
  toggleFollow,
  user,
  follow,
  unfollow,
  defaultStatus,
  getUserProfile,
  path
}) => {
  const [inAction, setInAction] = useState(false);

  const history = useHistory();

  const openProfile = async () => {
    await getUserProfile();
    history.push(path);
  };

  const toggleAction = (isFollowed) => {
    return () => {
      setInAction(true);
      toggleFollow(isFollowed)
        .finally(() => setInAction(false));
    };
  }

  return (
    <div className='users__user-wrapper'>
      <button
        className='users__profile-picture-button'
        to={`${path}/${user.id}`}
        onClick={openProfile}
      >
        <img className='users__profile-picture' src={user.photos.small} alt={user.pictureAlt} />
      </button>
      <button
        className='users__button'
        disabled={inAction}
        onClick={toggleAction(user.followed)}
      >
        {user.followed ? unfollow : follow}
      </button>
      <div className='users__user-info'>
        <div>
          <h3 className='users__user-name users__text'>
            {user.name}
          </h3>
          <p className='users__text'>
            {user.status ? user.status : defaultStatus}
          </p>
        </div>
        <div className='users__location'>
          <p className='users__text users__country'>
            {user.location.countryName + ','}
          </p>
          <p className='users__text'>
            {user.location.cityName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;
