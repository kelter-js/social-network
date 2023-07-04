import userAPI from "../API/api";
import { setUserPhoto } from "../state/profileReducer";

const getUserPhoto = (id) => {
  return async (dispatch) => {
    try {
      const response = await userAPI.getProfile(id);

      if (response.status === 200) {
        dispatch(setUserPhoto(response.data.photos));
      }
    } catch (err) {
      console.log("Error occurred while trying to get user data: ", err);
    }
  };
};

export default getUserPhoto;
