import userAPI from '../API/api';
import { switchFollow } from '../state/actionManager';

const toggleFollow = ({
  id,
  isFollowed,
}) => {
  return (dispatch) => {
    (isFollowed) ? (
      userAPI.unfollowUser(id)
        .then((result) => {
          if (result.data.resultCode === 0) {
            dispatch(switchFollow(id, false));
          }
        })
    ) : (
      userAPI.followUser(id)
        .then((result) => {
          if (result.data.resultCode === 0) {
            dispatch(switchFollow(id, true));
          }
        })
    );
  }
};

export default toggleFollow;
