const changeHeader = (state, action) => {
  if (action.text) {
    state.pageContent = { ...state.pageContent }
    state.pageContent.currentHeader = state.pageContent.headers[action.text];
  }

  return state;
}

export default changeHeader;
