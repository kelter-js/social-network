import { connect } from 'react-redux';
import { User } from './user.js';
import toggleFollow from '../../../thunk/toggleFollow';
import setNewUser from '../../../thunk/setNewUser';

const mapStateToProps = (state) => {
  return {
    unfollow: state.users.unfollow,
    follow: state.users.follow,
    defaultStatus: state.users.defaultStatus,
    userList: state.users.userList,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    toggleFollow: async (isFollowed) => {
      dispatch(toggleFollow({
        isFollowed,
        id: ownProps.user.id,
      }));
    },
    setNewUser: () => {
      dispatch(setNewUser({
        id: ownProps.user.id,
        userList: stateProps.userList,
      }));
    },
  };
}

const UserContainer = connect(mapStateToProps, null, mergeProps)(User);

export { UserContainer }
