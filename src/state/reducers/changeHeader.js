const changeHeader = (state, action) => {
  if (action.text) {
    state = { ...state }
    state.currentHeader = state.headers[action.text];
  }

  return state;
}

export default changeHeader;
