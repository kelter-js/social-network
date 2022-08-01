import { profileAPI } from '../API/api';
import getUserStatus from './getUserStatus';
import {
  setLoadingState,
} from '../state/actionManager';

const updateUserStatus = (status, id) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then((result) => {
        if (result.data.resultCode === 0) {
          dispatch(getUserStatus(id));
        }
      })
  };

};

export default updateUserStatus;
