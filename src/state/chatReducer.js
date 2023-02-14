//reducer functions
import addMessage from './reducers/addMessage';

import { chat } from './initialState';

const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageAC = (userId, text) => {
  return {
    type: ADD_MESSAGE,
    user: userId,
    text,
  }
}

const chatReducer = (state = chat, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage({ ...state }, action);
    default:
      return state;
  }
}

export default chatReducer;

export { addMessageAC as addMessage }

