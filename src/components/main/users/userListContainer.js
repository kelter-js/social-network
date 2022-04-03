import { connect } from 'react-redux';
import { UserList } from './userList.js';
import getUsers from "../../../thunk/getUsers";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    loadUsers: (currentPage, pageSize) => {
      dispatch(getUsers({
        currentPage,
        pageSize,
        url: stateProps.users.defaultProfilePicture,
        locations: stateProps.users.defaultLocations,
      }));
    },
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
