import { addMessage } from './addMessageReducer.js';
import { addPost } from './addPostReducer.js';
import { changeHeader } from './changeHeaderReducer.js';
import { changeLikeState } from './likeReducer.js';
import { changeText } from './changeTextReducer.js';
import { initialState } from './initialState.js';
import { setUsers } from './setUsers.js';
import { toggleFollow } from './toggleFollowReducer.js';
import { setTotalUsersCount } from './setTotalUsersCount.js';
import { setCurrentPage } from './setCurrentPage.js';
import { clearUsers } from './clearUsers.js';
import { setJumpPage } from './setJumpPage.js';
import { updateMaxJumpIndexAttention } from './updateMaxJumpIndexAttention.js';
import { setLoadingState } from './setLoadingState.js';
import { setUserProfile } from './setUserProfile.js';
import { setUserData } from './setUserData.js';
import { setUserLogout } from './setUserLogout.js';
import { setUserStatus } from './setUserStatus.js';
import { setUserLoginError } from './setUserLoginError.js';
import { removeLoginError } from './removeLoginError.js';

const reducers = (state, action) => {
  const actions = {
    'ADD-POST': (state) => addPost(state, action),
    'CHANGE_HEADER': (state, action) => changeHeader(state, action),
    'CHANGE-TEXT': (state, action) => changeText(state, action),
    'ADD-MESSAGE': (state, action) => addMessage(state, action),
    'CHANGE_LIKE_STATE': (state, action) => changeLikeState(state, action),
    'TOGGLE_FOLLOW': (state, action) => toggleFollow(state, action),
    'SET_USERS': (state, action) => setUsers(state, action),
    'CLEAR_USERS': (state, action) => clearUsers(state, action),
    'SET_USERS_COUNT': (state, action) => setTotalUsersCount(state, action),
    'SET_CURRENT_PAGE': (state, action) => setCurrentPage(state, action),
    'SET_JUMP_PAGE': (state, action) => setJumpPage(state, action),
    'UPDATE_MAX_JUMP_INDEX_ATTENTION': (state, action) => updateMaxJumpIndexAttention(state, action),
    'SET_LOADING_STATE': (state, action) => setLoadingState(state, action),
    'SET_USER_PROFILE': (state, action) => setUserProfile(state, action),
    'SET_USER_DATA': (state, action) => setUserData(state, action),
    'LOGOUT_USER': (state, action) => setUserLogout(state, action),
    'SET_USER_STATUS': (state, action) => setUserStatus(state, action),
    'LOGIN_ERROR': (state, action) => setUserLoginError(state, action),
    'REMOVE_LOGIN_ERROR': (state, action) => removeLoginError(state, action),
  }

  const currentAction = actions[action.type];

  if (currentAction) {
    let stateCopy = { ...state }
    stateCopy = currentAction(stateCopy, action);
    return stateCopy;
  }

  return initialState;
}

export { reducers }
