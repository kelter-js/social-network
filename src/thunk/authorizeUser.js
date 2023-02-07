import { authAPI } from '../API/api';
import userAPI from '../API/api';
import {
  setUserData,
  setLoginError,
  removeLoginError
} from '../state/actions';

const authorizeUser = (data) => {
  return (dispatch) => {
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
          dispatch(setLoginError(result.data.messages[0]));
        }
      });
  };
};

export default authorizeUser;
