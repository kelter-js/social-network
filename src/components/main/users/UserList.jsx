import React, { useEffect } from 'react';
import User from './UserContainer';
import Pagination from './PaginationContainer';
import Loading from '../../../utils/Loading';

const UserList = ({ users, isLoading, loadUsers }) => {
  useEffect(() => {
    if (users.userList.length === 0) {
      loadUsers(users.currentPage, users.pageSize);
    }
  }, [users.userList, users.currentPage]);

  const currentUsersLength = users.userList.length;
  return (
    <div className='users'>
      {!currentUsersLength && <Loading title='Please wait, loading users...' shouldBeCentered />}

      {!isLoading && (
        <h3 className='users__header users__text'>
          {users.header}
        </h3>
      )}

      <Pagination
        firstPage={users.firstPage}
        currentPage={users.currentPage}
        totalPages={users.totalPagesAmount}
      />

      {users.userList.slice(0, users.currentLoadingAmount).map((user) => {
        return (
          <User
            user={user}
            key={user.id}
          />
        );
      })}

      <Pagination
        firstPage={users.firstPage}
        currentPage={users.currentPage}
        totalPages={users.totalPagesAmount}
        shouldHide={isLoading}
      />
    </div>
  );
}

export default UserList;
