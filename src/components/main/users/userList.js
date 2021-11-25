import React from 'react';
import { UserContainer } from './userContainer.js';
import { PaginationContainer } from './paginationContainer.js';
import { Loading } from '../../../loading.js';

const UserList = (props) => {
  const currentUsersLength = props.users.userList.length;
  return (
    <div className='users'>
      {!currentUsersLength && <Loading />}
      <h3 className='users__header users__text'>
        {props.users.header}
      </h3>
      <PaginationContainer
        firstPage={props.users.firstPage}
        currentPage={props.users.currentPage}
        totalPages={props.users.totalPagesAmount}
      />
      {props.users.userList.slice(0, props.users.currentLoadingAmount).map((user) => {
        return (
          <UserContainer
            user={user}
            key={user.id}
          />
        );
      })}
      {!props.users.isLoading && (
        <PaginationContainer
          firstPage={props.users.firstPage}
          currentPage={props.users.currentPage}
          totalPages={props.users.totalPagesAmount}
        />
      )}
    </div>
  );
}
export { UserList }
