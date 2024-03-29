import { connect } from 'react-redux';
import { compose } from 'redux';
import UsersPage from './UsersPage';
import { setLoadingState } from '../../../state/loadingReducer';
import { clearUsers, setCurrentPage } from '../../../state/usersReducer';
import { getLoadingState } from '../../../state/selectors/serviceSelectors';
import { getPagesAmount } from '../../../state/selectors/paginationSelectors';

const mapStateToProps = (state) => ({
  totalPages: getPagesAmount(state),
  isLoading: getLoadingState(state),
});

export default compose(
  connect(mapStateToProps, {
    setLoadingState,
    setCurrentPage,
    clearUsers,
  })
)(UsersPage);
