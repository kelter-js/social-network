import { connect } from 'react-redux';
import { Page } from './page.js';
import {
  setLoadingState,
  setCurrentPage,
  clearUsers
} from '../../../state/actionManager.js';

const mapStateToProps = (state) => ({totalPages: state.users.totalPagesAmount, isLoading: state.users.isLoading});

const PageContainer = connect(mapStateToProps, {
  setLoadingState,
  setCurrentPage,
  clearUsers,
})(Page);

export { PageContainer }
