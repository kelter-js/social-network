import userAPI from '../API/api';
import { setUserProfile } from '../state/profileReducer';
import { setLoadingState } from '../state/loadingReducer';

const getUserData = ({
  userList,
  id,
}) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));

    try {
      const response = await userAPI.getProfile(id);

      //instead of fetching new random photos, we took already fetched, by filtering userlist using id
      response.data.photos = userList.filter(item => item.id === response.data.userId)[0].photos;
      //filter contacts from empty fields
      response.data.contacts = [...Object.entries(response.data.contacts)].filter(item => !!item[1]);
      dispatch(setUserProfile(response.data));
    } catch (err) {
      console.log("Error occurred while trying to get user data: ", err);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
};

export default getUserData;
