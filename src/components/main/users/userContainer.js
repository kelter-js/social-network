import { connect } from 'react-redux';
import { User } from './user.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'unfollow': state.users.unfollow,
    'follow': state.users.follow,
    'defaultSrc': state.users.defaultProfilePicture,
    'defaultStatus': state.users.defaultStatus,
    'defaultLocations': state.users.defaultLocations,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    toggleFollow: (id, location) => dispatch(stateProps.actionManager.createActionToggleFollow(id, location)),
  };
}

const UserContainer = connect(mapStateToProps, null, mergeProps)(User);

export { UserContainer }
