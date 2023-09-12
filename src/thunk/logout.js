import { authAPI } from "../API/api";
import { setLoadingState } from "../state/loadingReducer";
import { logoutUser } from "../state/userDataReducer";

const logout = async (dispatch) => {
  dispatch(setLoadingState(true));

  await authAPI.logout();
  dispatch(logoutUser());
  window.location.href = window.location.origin;
  dispatch(setLoadingState(false));
};

export default logout;
