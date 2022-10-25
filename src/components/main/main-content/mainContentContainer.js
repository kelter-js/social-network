import { connect } from 'react-redux';
import { MainPageContent } from './mainContent.js';
import { addPost } from '../../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({ pageContent: state.pageContent, isLoading: state.isLoading });

export default compose(connect(mapStateToProps, { addPost }))(MainPageContent);
