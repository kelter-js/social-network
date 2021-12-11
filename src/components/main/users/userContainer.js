import { connect } from 'react-redux';
import {
  toggleFollow,
  setUserProfile,
  setLoadingState,
} from '../../../state/actionManager.js';
import { User } from './user.js';
import * as axios from 'axios';

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
    toggleFollow: () => dispatch(toggleFollow(ownProps.user.id)),
    setNewUser: () => {
      dispatch(setLoadingState(true));
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${ownProps.user.id}`)
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
