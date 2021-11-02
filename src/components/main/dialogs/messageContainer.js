import { connect } from 'react-redux';
import { Message } from './message.js';

const mapStateToProps = (state) => {
  return {
    'handlers': state.handlers,
    'actionManager': state.actionManager,
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    addMessage: (dialogId) => dispatch(stateProps.actionManager.createActionMessage(dialogId)),
    changeText: (text) => dispatch(stateProps.actionManager.createActionChangeText(text, 'chat')),
  };
}

const MessageContainer = connect(mapStateToProps, null, mergeProps)(Message);

export { MessageContainer }
