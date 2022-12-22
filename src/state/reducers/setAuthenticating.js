const setAuthenticating = (state, action) => {
  state.isAuthenticating = action.state;
  return state;
}

export { setAuthenticating }
