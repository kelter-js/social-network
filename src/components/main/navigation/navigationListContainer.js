import { connect } from 'react-redux';
import { NavigationList } from './navigationList.js';
import { NavigationItem } from './navigationItem.js';

const mapStateToProps = (state) => {
  const navigationItems = state.defaultMenu.map((elem, index) => {
    return (
      <li key={index}>
        <NavigationItem
          navItem={elem}
        />
      </li>
    );
  });

  return {
    'navigationItems': navigationItems,
  }
}

const NavigationListContainer = connect(mapStateToProps)(NavigationList);

export { NavigationListContainer }
