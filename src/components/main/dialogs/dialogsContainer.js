import { connect } from 'react-redux';
import { Dialogs } from './dialogs.js';

const mapStateToProps = (state) => {
  return {
    'chat': state.chat,
    'actionManager': state.actionManager,
  }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export { DialogsContainer }
