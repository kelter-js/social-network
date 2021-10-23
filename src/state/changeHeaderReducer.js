const changeHeader = (state, action, headers) => {
  state.currentHeader = headers[action.text];
  return state;
}

export { changeHeader }
