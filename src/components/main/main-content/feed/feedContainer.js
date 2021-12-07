import { connect } from 'react-redux';
import { Feed } from './feed.js';
import { changeLikeState } from '../../../../state/actionManager.js';

const FeedContainer = connect(null, {changeLikeState})(Feed);

export { FeedContainer }
