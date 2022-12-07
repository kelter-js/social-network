import { authAPI } from '../API/api';
import userAPI from '../API/api';
import {
  setUserData,
  setLoadingState,
  loginError,
  removeLoginError
} from '../state/actionManager';

const authorizeUser = (data) => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    dispatch(removeLoginError());

    authAPI
      .login(data)
      .then((result) => {
        if (result.data.resultCode === 0) {
          const id = result.data.data.userId;
          userAPI
            .getProfile(id)
            .then((res) => {
              dispatch(setUserData({
                id,
                login: res.data.fullName,
                email: data.email,
              }));
            });
        } else {
          dispatch(loginError(result.data.messages[0]));
        }
      })
      .finally(() => {
        dispatch(setLoadingState(false));
      });
  };
};

export default authorizeUser;
