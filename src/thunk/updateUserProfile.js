import { profileAPI } from "../API/api";

const updateUserProfile = (data) => {
  return async (dispatch) => {
    await profileAPI.updateProfile(data);
  };
};

export default updateUserProfile;
