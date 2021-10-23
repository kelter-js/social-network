const addMessage = (state, action) => {
  const createMessage = (text) =>  {
    return {
      'text': text,
      'author': 'You',
      'style': {
        'author': 'dialogs__author--user',
        'message': 'dialogs__phrase--user',
      },
    }
  }

  state.messages[action.user].push(createMessage(state.currentText));
  state.currentText = undefined;

  return state;
}

export { addMessage }
