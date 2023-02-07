import addMessage from './reducers/addMessage';
import addPost from './reducers/addPost';
import changeHeader from './reducers/changeHeader';
import changeLikeState from './reducers/changeLike';
import initialState from './initialState';
import setUsers from './reducers/setUsers';
import toggleFollow from './reducers/toggleFollow';
import setTotalUsersCount from './reducers/setTotalUsersCount';
import setCurrentPage from './reducers/setCurrentPage';
import clearUsers from './reducers/clearUsers';
import setJumpPage from './reducers/setJumpPage';
import updateMaxJumpIndexAttention from './reducers/updateMaxJumpIndexAttention';
import setLoadingState from './reducers/setLoadingState';
import setUserProfile from './reducers/setUserProfile';
import setUserData from './reducers/setUserData';
import setUserLogout from './reducers/setUserLogout';
import setUserStatus from './reducers/setUserStatus';
import setUserLoginError from './reducers/setUserLoginError';
import removeLoginError from './reducers/removeLoginError';
import setAuthenticating from './reducers/setAuthenticating';
import setRequestFrame from './reducers/setRequestFrame';

const reducer = (state, action) => {
  const actions = {
    'ADD-POST': (state) => addPost(state, action),
    'CHANGE_HEADER': (state, action) => changeHeader(state, action),
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
    'SET_AUTHENTICATNG': (state, action) => setAuthenticating(state, action),
    'SET_USER_PROFILE': (state, action) => setUserProfile(state, action),
    'SET_USER_DATA': (state, action) => setUserData(state, action),
    'LOGOUT_USER': (state, action) => setUserLogout(state, action),
    'SET_USER_STATUS': (state, action) => setUserStatus(state, action),
    'LOGIN_ERROR': (state, action) => setUserLoginError(state, action),
    'REMOVE_LOGIN_ERROR': (state, action) => removeLoginError(state, action),
    'SET_REQUEST_FRAME': (state, action) => setRequestFrame(state, action),
  }

  const currentAction = actions[action.type];

  if (currentAction) {
    let stateCopy = { ...state }
    stateCopy = currentAction(stateCopy, action);
    return stateCopy;
  }

  return initialState;
}

export default reducer;
