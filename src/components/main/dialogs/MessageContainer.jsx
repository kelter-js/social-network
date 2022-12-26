import { connect } from 'react-redux';
import { compose } from 'redux';
import Message from './Message';
import { addMessage } from '../../../state/actions';
import { getMessagePlaceholder } from '../../../state/selectors/chatSelectors';

const mapStateToProps = (state) => ({ placeholder: getMessagePlaceholder(state) });

export default compose(connect(mapStateToProps, { addMessage }))(Message);
