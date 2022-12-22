import userAPI from '../API/api';
import {
  setTotalUsersCount,
  setLoadingState,
  setUsers,
  setRequestFrame
} from '../state/actions';
import { randomInteger, fetchImageUrl } from '../utils/service';

const getUsers = ({
  currentPage,
  pageSize,
  url,
  locations,
  lastFrame
}) => {
  const fillUserData = async (data) => {
    return await Promise.all(data.items.map(async (item) => {
      if (item.photos.small === null) {
        await fetchImageUrl(url).then(result => item.photos.small = item.photos.large = result);
      }

      if (!item.location) {
        item.location = locations[randomInteger(0, locations.length - 1)];
      }
      return item;
    }));
  };

  return (dispatch) => {
    dispatch(setLoadingState(true));
    dispatch(setRequestFrame());
    const currentFrame = Date.now();

    userAPI
      .getUserList(currentPage, pageSize)
      .then(async (data) => {
        const totalPagesAmount = Math.ceil(data.totalCount / pageSize);
        dispatch(setTotalUsersCount(totalPagesAmount));
        const templatedUserList = await fillUserData(data);
        if (currentFrame > lastFrame) {
          dispatch(setUsers(templatedUserList));
        }
      })
      .finally(() => dispatch(setLoadingState(false)));
  };
};

export default getUsers;
