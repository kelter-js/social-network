import { connect } from 'react-redux';
import { compose } from 'redux';
import Message from './Message';
import { addMessage } from '../../../state/actions';

const mapStateToProps = (state) => ({ messageInfo: state.chat.messageInfo });

export default compose(connect(mapStateToProps, { addMessage }))(Message);
