import setUserProfile from './setUserProfile';
import { pageContent } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...pageContent }

beforeEach(() => {
  state = deepClone(pageContent);
});

const action = {
  user: {
    photos: {
      small: '/img/default-profile.jpg',
      large: '/img/default-background.jpg'
    },
    aboutMe: 'User information',
    contacts: [
      [
        'facebook',
        1
      ],
      [
        'website',
        1
      ],
      [
        'vk',
        1
      ],
      [
        'twitter',
        1
      ],
      [
        'instagram',
        1
      ],
      [
        'youtube',
        1
      ],
      [
        'github',
        1
      ],
      [
        'mainLink',
        1
      ]
    ],
    lookingForAJob: false,
    lookingForAJobDescription: 'About your skillz',
    fullName: 'John Doe',
    feed: [
      {
        'post': 'Hey, is there anybody?',
        'likes': 15,
        'liked': false
      },
      {
        'post': 'Sup guize, is something really happening here?',
        'likes': 20,
        'liked': false
      }
    ]
  }
}

it('Should set profile data', () => {
  const previousProfileData = { ...state.currentUser }

  state = setUserProfile(state, action);

  expect(previousProfileData).not.toStrictEqual(state.currentUser);
  expect(state.currentUser.photos).toBe(action.user.photos);
  expect(state.currentUser.aboutMe).toBe(action.user.aboutMe);
  expect(state.currentUser.contacts).toBe(action.user.contacts);
  expect(state.currentUser.lookingForAJob).toBe(action.user.lookingForAJob);
  expect(state.currentUser.lookingForAJobDescription).toBe(action.user.lookingForAJobDescription);
  expect(state.currentUser.fullName).toBe(action.user.fullName);
  expect(state.currentUser.feed).toBe(action.user.feed);
});

it('Shouldn`t set profile data since action object is empty', () => {
  const previousProfileData = { ...state.currentUser }

  state = setUserProfile(state, {});

  expect(previousProfileData).toStrictEqual(state.currentUser);
});
