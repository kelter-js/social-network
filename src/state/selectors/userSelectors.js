import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
  return state.users;
};

export const getUnfollow = (state) => {
  return state.users.unfollow;
};

export const getFollow = (state) => {
  return state.users.follow;
};

export const getDefaultStatus = (state) => {
  return state.users.defaultStatus;
};

export const getUserList = (state) => {
  return state.users.userList;
};

export const getMenuPath = (state) => {
  return `/${state.defaultMenu[0]}`;
};

export const getLoginError = (state) => {
  return state.userData.loginError;
};

export const getCurrentUserData = (state) => {
  return state.userData;
};

const getCurrentIdSelector = (state) => {
  return state.pageContent.currentUser.userId || state.userData.id;
};

export const getCurrentId = createSelector(getCurrentIdSelector, (id) => id);

export const getCurrentUserStatus = (state) => {
  return state.pageContent.currentUser.status;
};

export const getUserId = (state) => {
  return state.userData.id;
};
