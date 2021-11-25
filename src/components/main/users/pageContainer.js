import { connect } from 'react-redux';
import { Page } from './page.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'totalPages': state.users.totalPagesAmount,
    'isLoading': state.users.isLoading,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    setCurrentPage: (newPage) => {
      if (ownProps.currentPage === +newPage || +newPage === 0) {
        return;
      }
      dispatch(stateProps.actionManager.createActionSetLoadingState(true));
      dispatch(stateProps.actionManager.createActionSetCurrentPage(newPage));
      dispatch(stateProps.actionManager.createActionClearUsers());
    },
  };
}

const PageContainer = connect(mapStateToProps, null, mergeProps)(Page);

export { PageContainer }
