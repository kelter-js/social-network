import { profileAPI } from "../API/api";
import { setUserPhoto } from "../state/profileReducer";

const updateUserPhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(setUserPhoto(response.data.data.photos));
    }
  };
};

export default updateUserPhoto;
