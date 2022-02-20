import { connect } from 'react-redux';
import {
  switchFollow,
  setUserProfile,
  setLoadingState,
} from '../../../state/actionManager.js';
import { User } from './user.js';
import userAPI from '../../../API/api.js';

const mapStateToProps = (state) => {
  return {
    unfollow: state.users.unfollow,
    follow: state.users.follow,
    defaultStatus: state.users.defaultStatus,
    userList: state.users.userList,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    toggleFollow: async (isFollowed) => {
      (isFollowed) ? (
        userAPI.unfollowUser(ownProps.user.id)
          .then((result) => {
            if (result.data.resultCode === 0) {
              dispatch(switchFollow(ownProps.user.id, false));
            }
          })
      ) : (
        userAPI.followUser(ownProps.user.id)
          .then((result) => {
            if (result.data.resultCode === 0) {
              dispatch(switchFollow(ownProps.user.id, true));
            }
          })
      );
    },
    setNewUser: () => {
      dispatch(setLoadingState(true));
      userAPI.getProfile(ownProps.user.id)
        .then((userProfile) => {
          //instead of fetching new random photos, we took already fetched, by filtering userlist using id
          userProfile.data.photos = stateProps.userList.filter(item => item.id === userProfile.data.userId)[0].photos;
          //filter contacts from empty fields
          userProfile.data.contacts = [...Object.entries(userProfile.data.contacts)].filter(item => !!item[1]);
          dispatch(setUserProfile(userProfile.data));
          dispatch(setLoadingState(false));
        });
    },
  };
}

const UserContainer = connect(mapStateToProps, null, mergeProps)(User);

export { UserContainer }
