import { connect } from 'react-redux';
import { Message } from './message.js';
import {
  addMessage,
  changeText,
} from '../../../state/actionManager.js';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    handlers: state.handlers,
    eventType: state.chat.eventType,
    messageInfo: state.chat.messageInfo,
  }
}
export default compose(connect(mapStateToProps, {
  changeText,
  addMessage,
}))(Message);
