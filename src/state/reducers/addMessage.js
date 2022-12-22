const addMessage = (state, action) => {
  const createMessage = (text) => {
    return {
      'text': text,
      'author': 'You',
      'style': {
        'author': 'dialogs__author--user',
        'message': 'dialogs__phrase--user',
      },
    }
  };

  state.chat = { ...state.chat }
  state.chat.messages[action.user] = [...state.chat.messages[action.user]];
  state.chat.messages[action.user].push(createMessage(action.text))
  return state;
};

export default addMessage;
