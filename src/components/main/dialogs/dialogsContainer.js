import { connect } from 'react-redux';
import { Dialogs } from './dialogs.js';

const mapStateToProps = (state) => {
  return {chat: state.chat}
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export { DialogsContainer }
