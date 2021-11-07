import React from 'react';
import { UserContainer } from './userContainer.js';

const UserList = (props) => {
  if (props.users.userList.length === 0) {
    props.setUsers(props.users.templateUserList);
  }

  return (
    <div className='users'>
      <h3 className='users__header users__text'>
        {props.users.header}
      </h3>
      {props.users.userList.slice(0, props.users.currentLoadingAmount).map((user, index) => {
        return (
          <UserContainer
            user={user}
            id={index}
            key={index}
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
