import { connect } from 'react-redux';
import { Message } from './message.js';
import { addMessage } from '../../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({ messageInfo: state.chat.messageInfo });

export default compose(connect(mapStateToProps, { addMessage }))(Message);
