import { addMessage } from './addMessageReducer.js';
import { addPost } from './addPostReducer.js';
import { changeHeader } from './changeHeaderReducer.js';
import { changeLikeState } from './likeReducer.js';
import { changeText } from './changeTextReducer.js';
import { initialState, headers } from './initialState.js';

const reducers = (headers, state, action) => {
  const actions = {
    'ADD-POST': () => addPost(state.pageContent),
    'CHANGE_HEADER': (action) => changeHeader(state.pageContent, action, headers),
    'CHANGE-TEXT-MESSAGE': (action) => {
      state.chat.currentText = changeText(state.chat.currentText, action);
    },
    'CHANGE-TEXT-POST': (action) => {
      state.pageContent.currentText = changeText(state.pageContent.currentText, action);
    },
    'ADD-MESSAGE': (action) => addMessage(state.chat, action),
    'CHANGE_LIKE_STATE': (action) => changeLikeState(state.pageContent.feed[action.postId]),
  }

  const currentAction = actions[action.type];

  if (currentAction) {
    currentAction(action, headers);
    return state;
  }

  return initialState;
}

const reduceHandlers = reducers.bind(null, headers);

export {reduceHandlers}
