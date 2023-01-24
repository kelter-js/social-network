import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { getChat } from '../../../state/selectors/chatSelectors';

const mapStateToProps = (state) => ({ chat: getChat(state) });

export default memo(compose(connect(mapStateToProps))(Dialogs));
