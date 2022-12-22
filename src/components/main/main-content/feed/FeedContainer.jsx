import { connect } from 'react-redux';
import { compose } from 'redux';
import Feed from './Feed';
import { changeLikeState } from '../../../../state/actions';

export default compose(connect(null, { changeLikeState }))(Feed);
