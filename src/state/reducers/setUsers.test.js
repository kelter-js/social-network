import setUsers from './setUsers';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) }
});

const action = {
  list: [
    {
      name: 'Sowa',
      id: 27850,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Belarus',
        cityName: 'Minsk'
      }
    },
    {
      name: 'Sephirothty',
      id: 27849,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Ukraine',
        cityName: 'Kiev'
      }
    },
    {
      name: 'MadMouse',
      id: 27848,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'United States',
        cityName: 'Philadelphia'
      }
    },
    {
      name: 'alexkonf',
      id: 27847,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Russia',
        cityName: 'Kirov'
      }
    },
    {
      name: 'Figaro',
      id: 27846,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Ukraine',
        cityName: 'Kiev'
      }
    },
    {
      name: 'vvs_sht84',
      id: 27845,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Russia',
        cityName: 'Kransnoyarks'
      }
    },
    {
      name: 'vvs_sht',
      id: 27844,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Russia',
        cityName: 'Kirov'
      }
    },
    {
      name: 'sergeyttt',
      id: 27843,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Belarus',
        cityName: 'Minsk'
      }
    },
    {
      name: 'Mor94oK',
      id: 27842,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Russia',
        cityName: 'Chelyabinsk'
      }
    },
    {
      name: 'Slava1967',
      id: 27841,
      uniqueUrlName: null,
      photos: {
        small: 'smallImage.png',
        large: 'largeImage.png'
      },
      status: null,
      followed: false,
      location: {
        countryName: 'Russia',
        cityName: 'Chelyabinsk'
      }
    }
  ],
  mark: Date.now()
}

it('Should set users list data', () => {
  const previousUsersList = [ ...state.users.userList ];

  setUsers(state, action);

  expect(previousUsersList).not.toStrictEqual(state.users.userList);
  expect(state.users.userList[0]).toStrictEqual(action.list[0]);
});

it('Shouldn`t set user list data since action object is empty', () => {
  const previousUsersList = [ ...state.users.userList ];

  setUsers(state, {});

  expect(previousUsersList).toStrictEqual(state.users.userList);
});

it('Shouldn`t set user list data since action timemark is older than storage timemark', () => {
  //this timestamp is newer than timestamp in action, so that means reducer will not update storage user list
  state.users.lastRequestFrame = Date.now()
  const previousUsersList = [ ...state.users.userList ];

  setUsers(state, action);

  expect(previousUsersList).toStrictEqual(state.users.userList);
});
