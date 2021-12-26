import React from 'react';
import { useHistory } from 'react-router-dom';

const User = (props) => {
  const {
    toggleFollow,
    user,
    follow,
    unfollow,
    defaultStatus,
    setNewUser,
  } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push('/profile', {userId: user.id});
    setNewUser();
  }

  return (
    <div className='users__user-wrapper'>
      <button style={{border: 'none', background: 'none', cursor: 'pointer'}} to={`/profile/${user.id}`} onClick={handleClick}>
        <img className='users__profile-picture' src={user.photos.small} alt={user.pictureAlt} />
      </button>
      <button className='users__button' type='button' onClick={toggleFollow}>
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

export { User }
