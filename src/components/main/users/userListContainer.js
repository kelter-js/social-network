import { connect } from 'react-redux';
import { UserList } from './userList.js';
import { randomInteger, fetchImageUrl } from '../../../service.js';
import * as axios from 'axios';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'users': state.users,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  if (stateProps.users.userList.length === 0) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${stateProps.users.pageSize}&page=${stateProps.users.currentPage}`)
      .then(async (result) => {
        const totalPagesAmount = Math.ceil(result.data.totalCount / stateProps.users.pageSize);
        dispatch(stateProps.actionManager.createActionSetTotalUsersCount(totalPagesAmount));

        const templatedUserList = await Promise.all(result.data.items.map(async (item) => {
          if (item.photos.small === null) {
            await fetchImageUrl(stateProps.users.defaultProfilePicture).then(result => item.photos.small = result);
          }

          if (!item.location) {
            item.location = stateProps.users.defaultLocations[randomInteger(0, stateProps.users.defaultLocations.length - 1)];
          }

          return item;
        }));

        return templatedUserList;
      })
      .then(result => {
        dispatch(stateProps.actionManager.createActionSetLoadingState(false));
        dispatch(stateProps.actionManager.createActionSetUsers(result));
      });
  }

  return {
    ...stateProps,
    ...ownProps,
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
