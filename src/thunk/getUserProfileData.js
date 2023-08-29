import userAPI from "../API/api";
import { setUserPhoto, setUserProfile } from "../state/profileReducer";

const getUserProfileData = (id) => {
  return async (dispatch) => {
    try {
      const response = await userAPI.getProfile(id);

      if (response.status === 200) {
        dispatch(setUserPhoto(response.data.photos));

        dispatch(
          setUserProfile({
            ...response.data,
            contacts: Object.entries(response.data.contacts),
          })
        );
      }

      return {
        ...response.data,
        contacts: Object.entries(response.data.contacts),
      };
    } catch (err) {
      console.log("Error occurred while trying to get user data: ", err);
    }
  };
};

export default getUserProfileData;
