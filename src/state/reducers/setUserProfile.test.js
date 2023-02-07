import setUserProfile from './setUserProfile';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { pageContent: { ...initialState.pageContent } }

beforeEach(() => {
  state = { pageContent: deepClone(initialState.pageContent) }
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
  const previousProfileData = { ...state.pageContent.currentUser }

  setUserProfile(state, action);

  expect(previousProfileData).not.toStrictEqual(state.pageContent.currentUser);
  expect(state.pageContent.currentUser.photos).toBe(action.user.photos);
  expect(state.pageContent.currentUser.aboutMe).toBe(action.user.aboutMe);
  expect(state.pageContent.currentUser.contacts).toBe(action.user.contacts);
  expect(state.pageContent.currentUser.lookingForAJob).toBe(action.user.lookingForAJob);
  expect(state.pageContent.currentUser.lookingForAJobDescription).toBe(action.user.lookingForAJobDescription);
  expect(state.pageContent.currentUser.fullName).toBe(action.user.fullName);
  expect(state.pageContent.currentUser.feed).toBe(action.user.feed);
});

it('Shouldn`t set profile data since action object is empty', () => {
  const previousProfileData = { ...state.pageContent.currentUser }

  setUserProfile(state, {});

  expect(previousProfileData).toStrictEqual(state.pageContent.currentUser);
});
