import toggleFollow from './toggleFollow';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) }
  state.users.userList = [
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
  ]
});

const getAction = (follow) => ({ id: 27850, follow });

it('Should toggle follow to dedicated user to true', () => {
  const previousFollowStatus = state.users.userList[0].followed;

  toggleFollow(state, getAction(true));

  expect(previousFollowStatus).not.toStrictEqual(state.users.userList[0].followed);
  expect(state.users.userList[0].followed).toStrictEqual(true);
});

it('Should toggle follow to dedicated user and then unfollow', () => {
  const previousFollowStatus = state.users.userList[0].followed;

  toggleFollow(state, getAction(true));

  expect(previousFollowStatus).not.toStrictEqual(state.users.userList[0].followed);
  expect(state.users.userList[0].followed).toStrictEqual(true);

  toggleFollow(state, getAction(false));

  expect(state.users.userList[0].followed).toStrictEqual(false);
});

it('Should convert non-boolean action.follow value to boolean', () => {
  const previousFollowStatus = state.users.userList[0].followed;

  toggleFollow(state, getAction({}));

  expect(previousFollowStatus).not.toStrictEqual(state.users.userList[0].followed);
  expect(state.users.userList[0].followed).toStrictEqual(true);

});
