import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { getChat } from '../../../state/selectors/chatSelectors';

const mapStateToProps = (state) => ({ chat: getChat(state) });

export default compose(connect(mapStateToProps))(Dialogs);
