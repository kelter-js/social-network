import React from 'react'

const ProfileData = (props) => {
  const profileFields = [];
  const data = props.data;
  let pseudoId = 0;

  for (let item in data) {
    profileFields.push(
      <li className = 'profile__info-item' key = {pseudoId++}>
        <p className = 'profile__info'>
          {`${item}: ${data[item]}`}
        </p>
      </li>
    );
  }

  return (profileFields);
}

export { ProfileData }
