import { connect } from 'react-redux';
import { UserList } from './userList.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'users': state.users,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    setUsers: (userList) => dispatch(stateProps.actionManager.createActionSetUsers(userList)),
    showMore: () => dispatch(stateProps.actionManager.createActionShowMoreUsers()),
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
