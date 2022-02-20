import { connect } from 'react-redux';
import { UserList } from './userList.js';
import { randomInteger, fetchImageUrl } from '../../../service.js';
import {
  setTotalUsersCount,
  setLoadingState,
  setUsers,
} from '../../../state/actionManager.js';
import userAPI from '../../../API/api.js';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    loadUsers: (currentPage, pageSize) => {
      dispatch(setLoadingState(true));

      userAPI.getUserList(currentPage, pageSize)
        .then(async (data) => {
          const totalPagesAmount = Math.ceil(data.totalCount / pageSize);
          dispatch(setTotalUsersCount(totalPagesAmount));

          const templatedUserList = await Promise.all(data.items.map(async (item) => {
            if (item.photos.small === null) {
              await fetchImageUrl(stateProps.users.defaultProfilePicture).then(result => item.photos.small = item.photos.large = result);
            }

            if (!item.location) {
              item.location = stateProps.users.defaultLocations[randomInteger(0, stateProps.users.defaultLocations.length - 1)];
            }
            return item;
          }));

          dispatch(setUsers(templatedUserList));
        })
        .finally(() => {
          dispatch(setLoadingState(false));
        })
    },
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
