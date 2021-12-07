import { connect } from 'react-redux';
import { toggleFollow } from '../../../state/actionManager.js';
import { User } from './user.js';

const mapStateToProps = (state) => {
  return {
    unfollow: state.users.unfollow,
    follow: state.users.follow,
    defaultSrc: state.users.defaultProfilePicture,
    defaultStatus: state.users.defaultStatus,
    defaultLocations: state.users.defaultLocations,
  }
}

const UserContainer = connect(mapStateToProps, {toggleFollow})(User);

export { UserContainer }
