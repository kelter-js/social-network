import React from 'react';

const User = (props) => {

  const onClick = () => {
    props.toggleFollow(props.user.id);
  }

  return (
    <div className='users__user-wrapper'>
      <img className='users__profile-picture' src={props.user.photos.small} alt={props.user.pictureAlt} />
      <button className='users__button' type='button' onClick={onClick}>
        {props.user.followed ? props.unfollow : props.follow}
      </button>
      <div className='users__user-info'>
        <div>
          <h3 className='users__user-name users__text'>
            {props.user.name}
          </h3>
          <p className='users__text'>
            {props.user.status ? props.user.status : props.defaultStatus}
          </p>
        </div>
        <div className='users__location'>
          <p className='users__text users__country'>
            {props.user.location.countryName + ','}
          </p>
          <p className='users__text'>
            {props.user.location.cityName}
          </p>
        </div>
      </div>
    </div>
  );
}

export { User }
