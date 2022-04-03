import userAPI from '../API/api';
import { setUserData } from '../state/actionManager';

const authenticateUser = (dispatch) => {
  userAPI
    .authenticateUser()
    .then(result => {
      if (result.data.resultCode === 0) {
        dispatch(setUserData(result.data.data));
      }
    });
};;

export default authenticateUser;
