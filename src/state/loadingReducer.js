//reducer functions
import setLoadingState from './reducers/setLoadingState';
import setAuthenticating from './reducers/setAuthenticating';

import { loading } from './initialState';

const SET_LOADING_STATE = 'SET_LOADING_STATE';
const SET_AUTHENTICATING = 'SET_AUTHENTICATING';

const setAuthenticatingAC = (state) => {
  return {
    type: SET_AUTHENTICATING,
    state,
  }
}

const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return setLoadingState({ ...state }, action);
    case SET_AUTHENTICATING:
      return setAuthenticating({ ...state }, action);
    default:
      return state;
  }
}

export const setLoadingStateAC = (state) => {
  return {
    type: SET_LOADING_STATE,
    state,
  }
}

export default loadingReducer;

export {
  setLoadingStateAC as setLoadingState,
  setAuthenticatingAC as setAuthenticating
}

