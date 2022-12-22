import userAPI from '../API/api';
import { setUserProfile, setLoadingState } from '../state/actions';

const getUserData = ({
  userList,
  id,
}) => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    userAPI
      .getProfile(id)
      .then((userProfile) => {
        //instead of fetching new random photos, we took already fetched, by filtering userlist using id
        userProfile.data.photos = userList.filter(item => item.id === userProfile.data.userId)[0].photos;
        //filter contacts from empty fields
        userProfile.data.contacts = [...Object.entries(userProfile.data.contacts)].filter(item => !!item[1]);
        dispatch(setUserProfile(userProfile.data));
      })
      .finally(() => dispatch(setLoadingState(false)));
  }
};

export default getUserData;
