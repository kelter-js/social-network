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

  if (action.user && action.text) {
    state.chat = { ...state.chat }

    const previousChatState = state.chat.messages[action.user];
    state.chat.messages[action.user] = previousChatState ? [...previousChatState] : [];

    state.chat.messages[action.user].push(createMessage(action.text));
  }

  return state;
};

export default addMessage;
