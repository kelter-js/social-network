import { profileAPI } from '../API/api';
import { setUserStatus } from '../state/profileReducer';

const getUserStatus = (userId) => {
  return async (dispatch) => {
    const userStatus = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(userStatus.data));
  };
};

export default getUserStatus;
