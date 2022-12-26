import { connect } from 'react-redux';
import { compose } from 'redux';
import NavigationList from './NavigationList';
import { getMenuPaths } from '../../../state/selectors/serviceSelectors';

const mapStateToProps = (state) => {
  return { defaultMenu: getMenuPaths(state) }
}

export default compose(connect(mapStateToProps))(NavigationList);
