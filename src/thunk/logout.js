import { authAPI } from '../API/api';
import { setLoadingState } from '../state/loadingReducer';
import { logoutUser } from '../state/userDataReducer';

const logout = async (dispatch) => {
  dispatch(setLoadingState(true));

  await authAPI.logout();
  dispatch(logoutUser());
  dispatch(setLoadingState(false));
};

export default logout;
