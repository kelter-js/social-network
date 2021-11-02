import { connect } from 'react-redux';
import { Feed } from './feed.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    ...ownProps,
    changeLikeStatus: () => dispatch(stateProps.actionManager.createActionChangeLikeState(ownProps.postId)),
  };
}

const FeedContainer = connect(mapStateToProps, null, mergeProps)(Feed);

export { FeedContainer }
