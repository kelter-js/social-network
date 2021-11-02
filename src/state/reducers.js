import { addMessage } from './addMessageReducer.js';
import { addPost } from './addPostReducer.js';
import { changeHeader } from './changeHeaderReducer.js';
import { changeLikeState } from './likeReducer.js';
import { changeText } from './changeTextReducer.js';
import { initialState } from './initialState.js';

const reducers = (state, action) => {
  const actions = {
    'ADD-POST': (state) => addPost(state),
    'CHANGE_HEADER': (state, action) => changeHeader(state, action),
    'CHANGE-TEXT': (state, action) => changeText(state, action),
    'ADD-MESSAGE': (state, action) => addMessage(state, action),
    'CHANGE_LIKE_STATE': (state, action) => changeLikeState(state, action),
  }

  const currentAction = actions[action.type];

  if (currentAction) {
    let stateCopy = {...state}
    stateCopy = currentAction(stateCopy, action);
    return stateCopy;
  }

  return initialState;
}

export {reducers}
