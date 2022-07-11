import { connect } from 'react-redux';
import { Dialogs } from './dialogs.js';
import { compose } from 'redux';

const mapStateToProps = (state) => ({chat: state.chat});

export default compose(connect(mapStateToProps))(Dialogs);
