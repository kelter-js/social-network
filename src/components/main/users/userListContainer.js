import { connect } from 'react-redux';
import { UserList } from './userList.js';
import * as axios from 'axios';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'users': state.users,
    'getCurrentLength': () => {
      return (state.users.currentLoadingAmount > state.users.userList.length) ? state.users.userList.length : state.users.currentLoadingAmount;
    },
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  if (stateProps.users.userList.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(result => dispatch(stateProps.actionManager.createActionSetUsers(result.data.items)))
  }

  return {
    ...stateProps,
    ...ownProps,
    showMore: () => dispatch(stateProps.actionManager.createActionShowMoreUsers()),
  };
}

const UserListContainer = connect(mapStateToProps, null, mergeProps)(UserList);

export { UserListContainer }
