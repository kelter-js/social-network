import { authAPI } from '../API/api';
import { setAuthenticating } from '../state/loadingReducer';
import { setUserData } from '../state/userDataReducer';

const authenticateUser = async (dispatch) => {
  dispatch(setAuthenticating(true));

  try {
    const response = await authAPI.authenticateMe();

    if (response.data.resultCode === 0) {
      dispatch(setUserData(response.data.data));
    }
  } catch (err) {
    console.log("Error occurred while trying to authenticate user: ", err);
  } finally {
    dispatch(setAuthenticating(false));
  }
};

export default authenticateUser;
