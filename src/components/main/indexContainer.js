import { connect } from 'react-redux';
import { Main } from './index.js';
import { updateHeader } from '../../state/actionManager.js';

const mapStateToProps = (state) => {
  return {
    defaultMenuPaths: state.defaultMenuPaths,
    pageContent: state.pageContent,
  }
}

const MainContainer = connect(mapStateToProps, {updateHeader})(Main);

export { MainContainer }
