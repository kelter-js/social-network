import { authAPI } from '../API/api';
import userAPI from '../API/api';
import { removeLoginError, setUserData, setLoginError } from '../state/userDataReducer';

const authorizeUser = (data) => {
  return async (dispatch) => {
    dispatch(removeLoginError());

    try {
      const response = await authAPI.login(data);

      if (response.data.resultCode === 0) {
        const id = response.data.data.userId;
        const userData = await userAPI.getProfile(id);

        dispatch(setUserData({
          id,
          login: userData.data.fullName,
          email: data.email,
        }));
      } else {
        dispatch(setLoginError(response.data.messages[0]));
      }
    } catch (err) {
      console.log("Error occurred while trying to authorize user: ", err);
    }
  };
};

export default authorizeUser;
