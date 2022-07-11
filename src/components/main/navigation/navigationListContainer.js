import { connect } from 'react-redux';
import { NavigationList } from './navigationList.js';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {defaultMenu: state.defaultMenuPaths}
}

export default compose(connect(mapStateToProps))(NavigationList);
