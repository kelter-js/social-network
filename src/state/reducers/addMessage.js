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
    state = { ...state }

    const previousChatState = state.messages[action.user];
    state.messages[action.user] = previousChatState ? [...previousChatState] : [];

    state.messages[action.user].push(createMessage(action.text));
  }

  return state;
};

export default addMessage;
