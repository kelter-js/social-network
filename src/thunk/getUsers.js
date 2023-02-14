import userAPI from '../API/api';
import { setLoadingState } from '../state/loadingReducer';
import { setRequestFrame } from '../state/usersReducer';
import { setUsers, setTotalUsersCount } from '../state/usersReducer';
import { randomInteger, fetchImageUrl } from '../utils/service';

const getUsers = ({
  currentPage,
  pageSize,
  url,
  locations
}) => {
  const fillUserData = async (data) => {
    return await Promise.all(data.items.map(async (item) => {
      if (item.photos.small === null) {
        item.photos.small = item.photos.large = await fetchImageUrl(url);
      }

      if (!item.location) {
        item.location = locations[randomInteger(0, locations.length - 1)];
      }
      return item;
    }));
  };

  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const requestMark = Date.now();
    dispatch(setRequestFrame(requestMark));

    try {
      const response = await userAPI.getUserList(currentPage, pageSize);

      const totalPagesAmount = Math.ceil(response.totalCount / pageSize);
      dispatch(setTotalUsersCount(totalPagesAmount));
      const templatedUserList = await fillUserData(response);
      dispatch(setUsers({ list: templatedUserList, mark: requestMark }));
    } catch (err) {
      console.log("Error occurred while trying to get users lsit: ", err);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

export default getUsers;
