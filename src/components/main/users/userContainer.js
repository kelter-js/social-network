import { connect } from 'react-redux';
import { User } from './user.js';
import { randomInteger } from '../../../service.js';

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

  if (!ownProps.user.location) {
    ownProps.user.location = stateProps.defaultLocations[randomInteger(0, stateProps.defaultLocations.length - 1)];
  }

  if (ownProps.user.photos.small === null) {
    ownProps.user.photos.small = stateProps.defaultSrc;
  }

  return {
    ...stateProps,
    ...ownProps,
    toggleFollow: (id, location) => dispatch(stateProps.actionManager.createActionToggleFollow(id, location)),
  };
}

const UserContainer = connect(mapStateToProps, null, mergeProps)(User);

export { UserContainer }
