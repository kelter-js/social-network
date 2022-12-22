import { connect } from 'react-redux';
import { compose } from 'redux';
import Page from './Page';
import { setLoadingState, setCurrentPage, clearUsers } from '../../../state/actions';

const mapStateToProps = (state) => ({
  totalPages: state.users.totalPagesAmount,
  isLoading: state.users.isLoading
});

export default compose(
  connect(mapStateToProps, {
    setLoadingState,
    setCurrentPage,
    clearUsers,
  })
)(Page);
