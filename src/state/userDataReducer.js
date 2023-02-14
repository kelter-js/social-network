//reducer functions
import setUserData from './reducers/setUserData';
import removeLoginError from './reducers/removeLoginError';
import setUserLoginError from './reducers/setUserLoginError';
import setUserLogout from './reducers/setUserLogout';

import { userData } from './initialState';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_LOGIN_ERROR = 'SET_USER_DATA';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT_USER = 'LOGOUT_USER';

const setUserDataAC = (data) => {
  return {
    type: SET_USER_DATA,
    data,
  }
}

const removeLoginErrorAC = () => {
  return {
    type: REMOVE_LOGIN_ERROR,
  }
}

const setLoginErrorAC = (error) => {
  return {
    type: LOGIN_ERROR,
    error,
  }
}

const logoutUserAC = () => {
  return {
    type: LOGOUT_USER,
  }
}

const userDataReducer = (state = userData, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return setUserData({ ...state }, action);
    case REMOVE_LOGIN_ERROR:
      return removeLoginError({ ...state });
    case LOGIN_ERROR:
      return setUserLoginError({ ...state }, action);
    case LOGOUT_USER:
      return setUserLogout({ ...state }, action);
    default:
      return state;
  }
}

export default userDataReducer;

export {
  setUserDataAC as setUserData,
  logoutUserAC as logoutUser,
  setLoginErrorAC as setLoginError,
  removeLoginErrorAC as removeLoginError,
};
