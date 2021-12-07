import { connect } from 'react-redux';
import { NavigationList } from './navigationList.js';

const mapStateToProps = (state) => {
  return {defaultMenu: state.defaultMenuPaths}
}

const NavigationListContainer = connect(mapStateToProps)(NavigationList);

export { NavigationListContainer }
