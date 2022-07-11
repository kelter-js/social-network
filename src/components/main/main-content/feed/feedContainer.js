import { connect } from 'react-redux';
import { Feed } from './feed.js';
import { changeLikeState } from '../../../../state/actionManager.js';
import { compose } from 'redux';

export default compose(connect(null, {changeLikeState}))(Feed);
