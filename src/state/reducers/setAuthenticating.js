const setAuthenticating = (state, action) => {
  state.isAuthenticating = Boolean(action.state);
  return state;
}

export default setAuthenticating;
