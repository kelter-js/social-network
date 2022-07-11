import { connect } from 'react-redux';
import { MainPageContent } from './mainContent.js';
import {
  addPost,
  changeText,
} from '../../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({handlers: state.handlers, pageContent: state.pageContent, isLoading: state.isLoading});

export default compose(connect(mapStateToProps, {addPost, changeText}))(MainPageContent);
