import { connect } from 'react-redux';
import { UserList } from './userList.js';
import { randomInteger, fetchImageUrl } from '../../../service.js';
import {
  setTotalUsersCount,
  setLoadingState,
  setUsers,
} from '../../../state/actionManager.js';
import * as axios from 'axios';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  if (stateProps.users.userList.length === 0) {
    dispatch(setLoadingState(true));
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${stateProps.users.currentPage}&count=${stateProps.users.pageSize}`, {
        withCredentials: true,
      })
      .then(async (result) => {
        const totalPagesAmount = Math.ceil(result.data.totalCount / stateProps.users.pageSize);
        dispatch(setTotalUsersCount(totalPagesAmount));

        const templatedUserList = await Promise.all(result.data.items.map(async (item) => {
          if (item.photos.small === null) {
            await fetchImageUrl(stateProps.users.defaultProfilePicture).then(result => item.photos.small = item.photos.large = result);
          }

          if (!item.location) {
            item.location = stateProps.users.defaultLocations[randomInteger(0, stateProps.users.defaultLocations.length - 1)];
          }
          return item;
        }));
        return templatedUserList;
      })
      .then(result => {
        dispatch(setUsers(result));
        dispatch(setLoadingState(false));
      });
  }

  return {
    ...stateProps,
    ...ownProps,
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
