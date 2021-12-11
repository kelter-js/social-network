import React from 'react';
import { UserContainer } from './userContainer.js';
import { PaginationContainer } from './paginationContainer.js';
import { Loading } from '../../../loading.js';

const UserList = (props) => {
  const {
    users,
    isLoading,
  } = props;

  const currentUsersLength = users.userList.length;
  return (
    <div className='users'>
      {!currentUsersLength && <Loading />}
      <h3 className='users__header users__text'>
        {users.header}
      </h3>
      <PaginationContainer
        firstPage={users.firstPage}
        currentPage={users.currentPage}
        totalPages={users.totalPagesAmount}
      />
      {users.userList.slice(0, users.currentLoadingAmount).map((user) => {
        return (
          <UserContainer
            user={user}
            key={user.id}
          />
        );
      })}
      {!isLoading && (
        <PaginationContainer
          firstPage={users.firstPage}
          currentPage={users.currentPage}
          totalPages={users.totalPagesAmount}
        />
      )}
    </div>
  );
}
export { UserList }
