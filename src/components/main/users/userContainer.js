import { connect } from 'react-redux';
import { User } from './user.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'unfollow': state.users.unfollow,
    'follow': state.users.follow,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  console.log(ownProps.user)

  return {
    ...stateProps,
    ...ownProps,
    toggleFollow: (id) => dispatch(stateProps.actionManager.createActionToggleFollow(id)),
  };
}

const UserContainer = connect(mapStateToProps, null, mergeProps)(User);

export { UserContainer }
