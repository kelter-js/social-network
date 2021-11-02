import { connect } from 'react-redux';
import { MainPageContent } from './mainContent.js';

const mapStateToProps = (state) => {
  return {
    'handlers': state.handlers,
    'actionManager': state.actionManager,
    'defaultText': state.pageContent.defaultText,
    'currentText': state.pageContent.currentText,
    'user': state.pageContent.userData,
    'feed': state.pageContent.feed,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    addPost: () => dispatch(stateProps.actionManager.createActionAddPost()),
    changeText: (text) => dispatch(stateProps.actionManager.createActionChangeText(text, 'pageContent')),
  };
}

const MainPageContentContainer = connect(mapStateToProps, null, mergeProps)(MainPageContent);

export { MainPageContentContainer }
