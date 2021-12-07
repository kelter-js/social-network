import { connect } from 'react-redux';
import { Message } from './message.js';
import {
  addMessage,
  changeText,
} from '../../../state/actionManager.js';

const mapStateToProps = (state) => {
  return {
    handlers: state.handlers,
    eventType: state.chat.eventType,
    messageInfo: state.chat.messageInfo,
  }
}

const MessageContainer = connect(mapStateToProps, {
  changeText,
  addMessage,
})(Message);

export { MessageContainer }
