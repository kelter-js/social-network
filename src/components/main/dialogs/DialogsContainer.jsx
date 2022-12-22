import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({ chat: state.chat });

export default compose(connect(mapStateToProps))(Dialogs);
