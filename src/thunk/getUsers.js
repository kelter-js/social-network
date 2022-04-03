import userAPI from '../API/api';
import {
  setTotalUsersCount,
  setLoadingState,
  setUsers,
} from '../state/actionManager';
import { randomInteger, fetchImageUrl } from '../service';

const getUsers = ({
  currentPage,
  pageSize,
  url,
  locations,
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

    userAPI
      .getUserList(currentPage, pageSize)
      .then(async (data) => {
        const totalPagesAmount = Math.ceil(data.totalCount / pageSize);
        dispatch(setTotalUsersCount(totalPagesAmount));
        const templatedUserList = await fillUserData(data);
        dispatch(setUsers(templatedUserList));
      })
      .finally(() => dispatch(setLoadingState(false)));
  };
};

export default getUsers;
