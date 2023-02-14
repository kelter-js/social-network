//reducer functions
import toggleFollow from './reducers/toggleFollow';
import clearUsers from './reducers/clearUsers';
import setCurrentPage from './reducers/setCurrentPage';
import setJumpPage from './reducers/setJumpPage';
import setRequestFrame from './reducers/setRequestFrame';
import setTotalUsersCount from './reducers/setTotalUsersCount';
import setUsers from './reducers/setUsers';
import maxJumpWarning from './reducers/maxJumpWarning';

import { users } from './initialState';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const CLEAR_USERS = 'CLEAR_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_JUMP_PAGE = 'SET_JUMP_PAGE';
const SET_REQUEST_FRAME = 'SET_REQUEST_FRAME';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_USERS = 'SET_USERS';
const UPDATE_JUMP_INDEX = 'UPDATE_JUMP_INDEX';

const setRequestFrameAC = (mark) => {
  return {
    type: SET_REQUEST_FRAME,
    mark,
  }
}

const switchFollowAC = (id, follow) => {
  return {
    type: TOGGLE_FOLLOW,
    id,
    follow,
  }
}

const setUsersAC = ({ list, mark }) => {
  return {
    type: SET_USERS,
    list,
    mark
  }
}

const clearUsersAC = () => {
  return {
    type: CLEAR_USERS,
  }
}

const setTotalUsersCountAC = (pagesAmount) => {
  return {
    type: SET_USERS_COUNT,
    pagesAmount,
  }
}

const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}

const updateJumpPageAC = (pageIndex) => {
  return {
    type: SET_JUMP_PAGE,
    pageIndex,
  }
}

const updateJumpIndexAC = (attentionStatus) => {
  return {
    type: UPDATE_JUMP_INDEX,
    status: attentionStatus,
  }
}

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return toggleFollow({ ...state }, action);
    case CLEAR_USERS:
      return clearUsers({ ...state });
    case SET_CURRENT_PAGE:
      return setCurrentPage({ ...state }, action);
    case SET_JUMP_PAGE:
      return setJumpPage({ ...state }, action);
    case SET_REQUEST_FRAME:
      return setRequestFrame({ ...state }, action);
    case SET_USERS_COUNT:
      return setTotalUsersCount({ ...state }, action);
    case SET_USERS:
      return setUsers({ ...state }, action);
    case UPDATE_JUMP_INDEX:
      return maxJumpWarning({ ...state }, action);
    default:
      return state;
  }
}

export default usersReducer;

export {
  switchFollowAC as switchFollow,
  setUsersAC as setUsers,
  clearUsersAC as clearUsers,
  setTotalUsersCountAC as setTotalUsersCount,
  setCurrentPageAC as setCurrentPage,
  updateJumpPageAC as updateJumpPage,
  updateJumpIndexAC as updateJumpIndex,
  setRequestFrameAC as setRequestFrame,
}
