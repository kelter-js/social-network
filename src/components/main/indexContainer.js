import { connect } from 'react-redux';
import { Main } from './index.js';
import {
  updateHeader,
  setUserProfile,
} from '../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({ pageContent: state.pageContent });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  if (Object.values(stateProps.pageContent.currentUser).length === 0) {
    dispatch(setUserProfile(stateProps.pageContent.defaultUser));
  }

  return {
    ...stateProps,
    ...ownProps,
    updateHeader: (header) => dispatch(updateHeader(header)),
    setDefaultProfile: () => dispatch(setUserProfile(stateProps.pageContent.defaultUser)),
  };
}

export default compose(connect(mapStateToProps, null, mergeProps))(Main);
