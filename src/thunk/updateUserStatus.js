import { profileAPI } from '../API/api';
import getUserStatus from './getUserStatus';

const updateUserStatus = (status, id) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(getUserStatus(id));
    }
  };
};

export default updateUserStatus;
