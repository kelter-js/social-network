import { connect } from 'react-redux';
import { compose } from 'redux';
import UserList from './UserList';
import getUsers from '../../../thunk/getUsers';
import { getUsersSelector } from '../../../state/selectors/userSelectors';
import { getLoadingState } from '../../../state/selectors/serviceSelectors';

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    isLoading: getLoadingState(state),
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
