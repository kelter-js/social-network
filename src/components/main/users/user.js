import React, { useEffect, useState } from 'react';

const User = (props) => {
  const fetchImageUrl = async (newImage) => {
    const image = await fetch(newImage);
    return image.url;
  }

  const [profilePictureSrc, setProfilePictureSrc] = useState();
  useEffect(() => {
    fetchImageUrl(props.user.profilePicture).then(result => setProfilePictureSrc(result));
  }, [props.user.profilePicture]);

  const onClick = () => {
    props.toggleFollow(props.id);
  }

  return (
    <div className='users__user-wrapper'>
      <img className='users__profile-picture' src={profilePictureSrc} alt={props.user.pictureAlt} />
      <button className='users__button' type='button' onClick={onClick}>
        {props.user.isFollowed ? props.unfollow : props.follow}
      </button>
      <div className='users__user-info'>
        <div>
          <h3 className='users__user-name users__text'>
            {props.user.name}
          </h3>
          <p className='users__text'>
            {props.user.status}
          </p>
        </div>
        <div className='users__location'>
          <p className='users__text users__country'>
            {props.user.countryName + ','}
          </p>
          <p className='users__text'>
            {props.user.cityName}
          </p>
        </div>
      </div>
    </div>
  );
}

export { User }
