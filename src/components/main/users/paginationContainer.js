import { connect } from 'react-redux';
import {
  updateMaxJumpIndexAttention,
  updateJumpPage,
  clearUsers,
  setCurrentPage,
} from '../../../state/actionManager.js';
import { Pagination } from './pagination.js';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    jumpToPage: state.users.jumpToPage,
    maxJumpIndexAttention: state.users.maxJumpIndexAttention,
    maxJumpLengthText: state.users.maxJumpLengthText,
    isLoading: state.isLoading,
    jumpToPageText: state.users.jumpToPageText,
    onKeyDown: state.handlers.onEnter,
  }
}

export default compose(
  connect(mapStateToProps, {
    updateMaxJumpIndexAttention,
    updateJumpPage,
    clearUsers,
    setCurrentPage,
  })
)(Pagination);
