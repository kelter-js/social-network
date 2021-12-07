import { connect } from 'react-redux';
import {
  updateMaxJumpIndexAttention,
  updateJumpPage,
  setLoadingState,
  clearUsers,
  setCurrentPage,
} from '../../../state/actionManager.js';
import { Pagination } from './pagination.js';

const mapStateToProps = (state) => {
  return {
    jumpToPage: state.users.jumpToPage,
    maxJumpIndexAttention: state.users.maxJumpIndexAttention,
    maxJumpLengthText: state.users.maxJumpLengthText,
    isLoading: state.users.isLoading,
    jumpToPageText: state.users.jumpToPageText,
    onKeyDown: state.handlers.onEnter,
  }
}

const PaginationContainer = connect(mapStateToProps, {
  updateMaxJumpIndexAttention,
  updateJumpPage,
  setLoadingState,
  clearUsers,
  setCurrentPage,
})(Pagination);

export { PaginationContainer }
