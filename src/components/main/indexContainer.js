import { connect } from 'react-redux';
import { Main } from './index.js';

const mapStateToProps = (state) => {
  return {
    'defaultMenuPaths': state.defaultMenuPaths,
    'pageContent': state.pageContent,
    'actionManager': state.actionManager,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    updateHeader: (path) => {
      dispatch(stateProps.actionManager.createActionChangeCurrentHeader(path));
    },
  };
}


const MainContainer = connect(mapStateToProps, null, mergeProps)(Main);

export { MainContainer }
