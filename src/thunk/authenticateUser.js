import { authAPI } from '../API/api';
import { setUserData } from '../state/actionManager';

const authenticateUser = (dispatch) => {
  authAPI
    .authenticateMe()
    .then(result => {
      if (result.data.resultCode === 0) {
        dispatch(setUserData(result.data.data));
      }
    });
};

export default authenticateUser;
