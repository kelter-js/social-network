import { connect } from 'react-redux';
import { compose } from 'redux';
import Message from './Message';
import { addMessage } from '../../../state/actions';
import { getMessageInfo } from '../../../state/selectors/chatSelectors';

const mapStateToProps = (state) => ({ messageInfo: getMessageInfo(state) });

export default compose(connect(mapStateToProps, { addMessage }))(Message);
