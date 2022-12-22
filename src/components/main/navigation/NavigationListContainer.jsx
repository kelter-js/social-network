import { connect } from 'react-redux';
import { compose } from 'redux';
import NavigationList from './NavigationList';

const mapStateToProps = (state) => {
  return { defaultMenu: state.defaultMenuPaths }
}

export default compose(connect(mapStateToProps))(NavigationList);
