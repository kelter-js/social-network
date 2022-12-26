import { connect } from 'react-redux';
import { compose } from 'redux';
import User from './User';
import toggleFollow from '../../../thunk/toggleFollow';
import getUserData from '../../../thunk/getUserData';
import {
  getUnfollow,
  getFollow,
  getDefaultStatus,
  getUserList,
  getMenuPath
 } from '../../../state/selectors/userSelectors';

const mapStateToProps = (state) => {
  return {
    unfollow: getUnfollow(state),
    follow: getFollow(state),
    defaultStatus: getDefaultStatus(state),
    userList: getUserList(state),
    path: getMenuPath(state),
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
