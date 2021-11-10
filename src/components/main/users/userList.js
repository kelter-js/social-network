import React from 'react';
import { UserContainer } from './userContainer.js';
import { Loading } from '../../../loading.js';

const UserList = (props) => {
  const currentUsersLength = props.users.userList.length;
  return (
    <div className='users'>
      {!currentUsersLength && <Loading />}
      <h3 className='users__header users__text'>
        {props.users.header}
      </h3>
      {props.users.userList.slice(0, props.users.currentLoadingAmount).map((user) => {
        return (
          <UserContainer
            user={user}
            key={user.id}
          />
        );
      })}
      <button className='users__button users__button--show-more' type='button' onClick={props.showMore} disabled={!currentUsersLength || props.users.allUsersDisplayed}>
        {props.users.showMoreButtonText}
      </button>
    </div>
  );
}

export { UserList }
