import { addMessage } from './addMessageReducer.js';
import { addPost } from './addPostReducer.js';
import { changeHeader } from './changeHeaderReducer.js';
import { changeLikeState } from './likeReducer.js';
import { changeText } from './changeTextReducer.js';

const reduceHandler = (state, action, headers) => {
  const actions = {
    'ADD-POST': () => {
      state.pageContent = addPost(state.pageContent);
    },
    'CHANGE_HEADER': (action) => {
      state.pageContent = changeHeader(state.pageContent, action, headers);
    },
    'CHANGE-TEXT-MESSAGE': (action) => {
      state.chat.currentText = changeText(state.chat.currentText, action);
    },
    'CHANGE-TEXT-POST': (action) => {
      state.pageContent.currentText = changeText(state.pageContent.currentText, action);
    },
    'ADD-MESSAGE': (action) => {
      state.chat = addMessage(state.chat, action);
    },
    'LIKE': (action) => {
      state.pageContent.feed[action.postId] = changeLikeState(state.pageContent.feed[action.postId], true);
    },
    'DISLIKE': (action) => {
      state.pageContent.feed[action.postId] = changeLikeState(state.pageContent.feed[action.postId]);
    },
  }

  actions[action.type](action, headers);
  return state;
}

export {reduceHandler}
