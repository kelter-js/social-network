import { connect } from 'react-redux';
import { Pagination } from './pagination.js';

const mapStateToProps = (state) => {
  return {
    'actionManager': state.actionManager,
    'jumpToPage': state.users.jumpToPage,
    'maxJumpIndexAttention': state.users.maxJumpIndexAttention,
    'maxJumpLengthText': state.users.maxJumpLengthText,
    'isLoading': state.users.isLoading,
    'jumpToPageText': state.users.jumpToPageText,
    'onKeyDown': state.handlers.onEnter,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,

    updateJumpIndex: (index) => {
      if (`${index}`.length > `${ownProps.totalPages}`.length ) {
        if (!stateProps.maxJumpIndexAttention) {
          dispatch(stateProps.actionManager.createActionUpdateMaxJumpIndexAttention(true));
        }
        return;
      }

      if (stateProps.maxJumpIndexAttention) {
        dispatch(stateProps.actionManager.createActionUpdateMaxJumpIndexAttention(false));
      }

      if (index > ownProps.totalPages) {
        dispatch(stateProps.actionManager.createActionUpdateJumpPage(ownProps.totalPages));
        return;
      }

      dispatch(stateProps.actionManager.createActionUpdateJumpPage(index));
    },

    setCurrentPage: (newPage) => {
      if (+newPage === 0) {
        return;
      }

      dispatch(stateProps.actionManager.createActionSetLoadingState(true));
      dispatch(stateProps.actionManager.createActionUpdateJumpPage(''));
      dispatch(stateProps.actionManager.createActionClearUsers());
      dispatch(stateProps.actionManager.createActionSetCurrentPage(+newPage));
    },
  };
}

const PaginationContainer = connect(mapStateToProps, null, mergeProps)(Pagination);

export { PaginationContainer }
