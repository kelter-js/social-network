import { connect } from 'react-redux';
import { Dialogs } from './dialogs.js';

const mapStateToProps = (state) => ({chat: state.chat});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export { DialogsContainer }
