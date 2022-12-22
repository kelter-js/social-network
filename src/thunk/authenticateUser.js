import { authAPI } from '../API/api';
import { setUserData, setAuthenticating } from '../state/actions';

const authenticateUser = (dispatch) => {
  dispatch(setAuthenticating(true));

  authAPI
    .authenticateMe()
    .then(result => {
      if (result.data.resultCode === 0) {
        dispatch(setUserData(result.data.data));
      }
    })
    .finally(() => {
      dispatch(setAuthenticating(false));
    });
};

export default authenticateUser;
