import { connect } from 'react-redux';
import { MainPageContent } from './mainContent.js';
import {
  addPost,
  changeText,
} from '../../../state/actionManager.js';

const mapStateToProps = (state) => ({handlers: state.handlers, pageContent: state.pageContent, isLoading: state.isLoading});

const MainPageContentContainer = connect(mapStateToProps, {addPost, changeText})(MainPageContent);

export { MainPageContentContainer }
