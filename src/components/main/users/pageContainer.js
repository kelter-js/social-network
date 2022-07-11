import { connect } from 'react-redux';
import { Page } from './page.js';
import {
  setLoadingState,
  setCurrentPage,
  clearUsers
} from '../../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({ totalPages: state.users.totalPagesAmount, isLoading: state.users.isLoading });

export default compose(
  connect(mapStateToProps, {
    setLoadingState,
    setCurrentPage,
    clearUsers,
  })
)(Page);
