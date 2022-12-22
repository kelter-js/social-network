import { authAPI } from '../API/api';
import { setLoadingState, logoutUser } from '../state/actions';

const logout = (dispatch) => {
  dispatch(setLoadingState(true));

  authAPI
    .logout()
    .then(() => dispatch(logoutUser()))
    .finally(() => dispatch(setLoadingState(false)));
};

export default logout;
