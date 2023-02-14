import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearUsers, setCurrentPage, updateJumpPage, updateJumpIndex } from '../../../state/usersReducer';
import Pagination from './Pagination';
import { getLoadingState } from '../../../state/selectors/serviceSelectors';
import {
  getPageToJump,
  getMaxJumpWarning,
  getJumpLength,
  getJumpText,
  getEnterHandler
 } from '../../../state/selectors/paginationSelectors';

const mapStateToProps = (state) => {
  return {
    jumpToPage: getPageToJump(state),
    jumpIndex: getMaxJumpWarning(state),
    maxJumpLengthText: getJumpLength(state),
    isLoading: getLoadingState(state),
    jumpToPageText: getJumpText(state),
    onKeyDown: getEnterHandler(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    updateJumpIndex,
    updateJumpPage,
    clearUsers,
    setCurrentPage,
  })
)(Pagination);
