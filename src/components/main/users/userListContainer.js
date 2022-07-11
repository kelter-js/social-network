import { connect } from 'react-redux';
import { UserList } from './userList.js';
import getUsers from "../../../thunk/getUsers";
import { compose } from 'redux';

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

export default compose(connect(mapStateToProps, null, mergeProps))(UserList);
