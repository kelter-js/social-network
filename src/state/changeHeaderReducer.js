const changeHeader = (state, action) => {
  state.pageContent = {...state.pageContent}
  state.pageContent.currentHeader = state.pageContent.headers[action.text];
  return state;
}

export { changeHeader }
