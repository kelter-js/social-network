import userAPI from '../API/api';
import { switchFollow } from '../state/usersReducer';

const toggleFollow = ({
  id,
  isFollowed,
}) => {
  return async (dispatch) => {
    const switcher = (response, state) => {
      if (response.data.resultCode === 0) {
        dispatch(switchFollow(id, state));
      }
    }

    if (isFollowed) {
      const response = await userAPI.unfollowUser(id);
      switcher(response, false);
    } else {
      const response = await userAPI.followUser(id);
      switcher(response, true);
    }
  }
};

export default toggleFollow;
