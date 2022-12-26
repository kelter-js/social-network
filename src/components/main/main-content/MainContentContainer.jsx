import { connect } from 'react-redux';
import { compose } from 'redux';
import MainPageContent from './MainContent';
import { addPost } from '../../../state/actions';
import { getLoadingState } from '../../../state/selectors/serviceSelectors';
import { getPageContent } from '../../../state/selectors/mainComponentSelectors';

const mapStateToProps = (state) => ({
  pageContent: getPageContent(state),
  isLoading: getLoadingState(state),
});

export default compose(connect(mapStateToProps, { addPost }))(MainPageContent);
