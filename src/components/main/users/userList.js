import React from 'react';
import { UserContainer } from './userContainer.js';

const UserList = (props) => {
  return (
    <div className='users'>
      <h3 className='users__header users__text'>
        {props.users.header}
      </h3>
      {props.users.userList.slice(0, props.getCurrentLength()).map((user) => {
        return (
          <UserContainer
            user={user}
            key={user.id}
          />
        );
      })}
      <button className='users__button users__button--show-more' type='button' onClick={props.showMore}>
        {props.users.showMoreButtonText}
      </button>
    </div>
  );
}

export { UserList }
