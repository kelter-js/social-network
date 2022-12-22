import { connect } from 'react-redux';
import { compose } from 'redux';
import MainPageContent from './MainContent';
import { addPost } from '../../../state/actions';

const mapStateToProps = (state) => ({
  pageContent: state.pageContent,
  isLoading: state.isLoading
});

export default compose(connect(mapStateToProps, { addPost }))(MainPageContent);
