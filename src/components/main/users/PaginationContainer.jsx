import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  updateMaxJumpIndexAttention,
  updateJumpPage,
  clearUsers,
  setCurrentPage,
} from '../../../state/actions';
import Pagination from './Pagination';
import { getLoadingState } from '../../../state/selectors/serviceSelectors';
import {
  getPageToJump,
  getMaxIndex,
  getJumpLength,
  getJumpText,
  getEnterHandler
 } from '../../../state/selectors/paginationSelectors';

const mapStateToProps = (state) => {
  return {
    jumpToPage: getPageToJump(state),
    maxJumpIndexAttention: getMaxIndex(state),
    maxJumpLengthText: getJumpLength(state),
    isLoading: getLoadingState(state),
    jumpToPageText: getJumpText(state),
    onKeyDown: getEnterHandler(state),
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
