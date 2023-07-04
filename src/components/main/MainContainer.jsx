import { connect } from 'react-redux';
import { compose } from 'redux';
import Main from './Main';
import { setDefaultUserProfile, changeHeader } from '../../state/profileReducer';
import { getPageContent } from '../../state/selectors/mainComponentSelectors';

const mapStateToProps = (state) => ({ pageContent: getPageContent(state) });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  if (Object.values(stateProps.pageContent.currentUser).length === 0) {
    dispatch(setDefaultUserProfile(stateProps.pageContent.defaultUser));
  }

  return {
    ...stateProps,
    ...ownProps,
    updateHeader: (header) => dispatch(changeHeader(header)),
    setDefaultProfile: () => dispatch(setDefaultUserProfile(stateProps.pageContent.defaultUser)),
  };
}

export default compose(connect(mapStateToProps, null, mergeProps))(Main);
