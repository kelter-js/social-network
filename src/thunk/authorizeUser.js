import { authAPI } from '../API/api';
import userAPI from '../API/api';
import { setUserData, setLoadingState } from '../state/actionManager';

const authorizeUser = (dispatch, getStore) => {
  const data = getStore().loginData;
  dispatch(setLoadingState(true));
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
      }
    })
    .finally(() => {
      dispatch(setLoadingState(false));
    });
};;

export default authorizeUser;
