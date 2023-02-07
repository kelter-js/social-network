import clearUsers from './clearUsers';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) };
});

it('Should clear user list', () => {
  state.users.userList = [{
    "name": "MadMouse",
    "id": 'someKindOfID',
    "uniqueUrlName": null,
    "photos": {
      "small": "someTestImageUrlSmall.png",
      "large": "someTestImageUrlLarge.png"
    },
    "status": null,
    "followed": false,
    "location": {
      "countryName": "someCountryName",
      "cityName": "someCityName"
    }
  }];
  const previousUserListLength = state.users.userList.length;

  clearUsers(state, {});

  expect(previousUserListLength).not.toBe(state.users.userList.length);
  expect(state.users.userList.length).toBe(0);
});
