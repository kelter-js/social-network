import { profileAPI } from '../API/api';
import { setUserStatus } from '../state/actions';

const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then((userStatus) => {
        dispatch(setUserStatus(userStatus.data));
      })
  };
};

export default getUserStatus;
