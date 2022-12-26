import { connect } from 'react-redux';
import { compose } from 'redux';
import Main from './Main';
import { updateHeader, setUserProfile } from '../../state/actions';
import { getPageContent } from '../../state/selectors/mainComponentSelectors';

const mapStateToProps = (state) => ({ pageContent: getPageContent(state) });

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
