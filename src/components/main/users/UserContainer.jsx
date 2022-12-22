import { connect } from 'react-redux';
import { compose } from 'redux';
import User from './User';
import toggleFollow from '../../../thunk/toggleFollow';
import getUserData from '../../../thunk/getUserData';

const mapStateToProps = (state) => {
  return {
    unfollow: state.users.unfollow,
    follow: state.users.follow,
    defaultStatus: state.users.defaultStatus,
    userList: state.users.userList,
    path: `/${state.defaultMenu[0]}`,
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
    getUserProfile: async () => {
      dispatch(getUserData({
        id: ownProps.user.id,
        userList: stateProps.userList,
      }));
    },
  };
}

export default compose(connect(mapStateToProps, null, mergeProps))(User);
