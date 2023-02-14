import clearUsers from './clearUsers';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...users }

beforeEach(() => {
  state = deepClone(users);
});

it('Should clear user list', () => {
  state.userList = [{
    'name': 'MadMouse',
    'id': 'someKindOfID',
    'uniqueUrlName': null,
    'photos': {
      'small': 'someTestImageUrlSmall.png',
      'large': 'someTestImageUrlLarge.png'
    },
    'status': null,
    'followed': false,
    'location': {
      'countryName': 'someCountryName',
      'cityName': 'someCityName'
    }
  }];
  const previousUserListLength = state.userList.length;

  state = clearUsers(state);

  expect(previousUserListLength).not.toBe(state.userList.length);
  expect(state.userList.length).toBe(0);
});
