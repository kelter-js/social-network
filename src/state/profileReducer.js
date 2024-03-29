//reducer functions
import addPost from './reducers/addPost';
import changeHeader from './reducers/changeHeader';
import changeLikeState from './reducers/changeLike';
import setUserProfile from './reducers/setUserProfile';
import setDefaultUserProfile from './reducers/setDefaultUserProfile';
import setUserStatus from './reducers/setUserStatus';
import setUserPhotos from './reducers/setUserPhotos';

import { pageContent } from './initialState';

const ADD_POST = 'ADD_POST';
const CHANGE_HEADER = 'CHANGE_HEADER';
const CHANGE_LIKE_STATE = 'CHANGE_LIKE_STATE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DEFAULT_USER_PROFILE = 'SET_DEFAULT_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

export const addPostAC = (text) => {
  return {
    type: ADD_POST,
    text,
  }
}

export const setPhotoAC = (photos) => {
  return {
    type: SET_USER_PHOTO,
    photos,
  }
}

const changeLikeStateAC = (postId) => {
  return {
    type: CHANGE_LIKE_STATE,
    postId,
  }
}

const changeHeaderAC = (text) => {
  return {
    type: CHANGE_HEADER,
    text,
  }
}

const setUserProfileAC = (user) => {
  return {
    type: SET_USER_PROFILE,
    user,
  }
}

const setDefaultUserProfileAC = (user) => {
  return {
    type: SET_DEFAULT_USER_PROFILE,
    user,
  }
}

const setUserStatusAC = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  }
}

const profileReducer = (state = pageContent, action) => {
  switch (action.type) {
    case ADD_POST:
      return addPost({ ...state }, action);
    case CHANGE_HEADER:
      return changeHeader({ ...state }, action);
    case CHANGE_LIKE_STATE:
      return changeLikeState({ ...state }, action);
    case SET_USER_PROFILE:
      return setUserProfile({ ...state }, action);
    case SET_DEFAULT_USER_PROFILE:
      return setDefaultUserProfile({ ...state }, action);
    case SET_USER_STATUS:
      return setUserStatus({ ...state }, action);
    case SET_USER_PHOTO:
      return setUserPhotos({ ...state }, action);
    default:
      return state;
  }
}

export default profileReducer;

export {
  changeLikeStateAC as changeLikeState,
  addPostAC as addPost,
  changeHeaderAC as changeHeader,
  setUserProfileAC as setUserProfile,
  setUserStatusAC as setUserStatus,
  setPhotoAC as setUserPhoto,
  setDefaultUserProfileAC as setDefaultUserProfile,
};
