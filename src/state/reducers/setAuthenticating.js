const setAuthenticating = (state, action) => {
  state.loading = { ...state.loading }

  state.isAuthenticating = Boolean(action.state);
  return state;
}

export default setAuthenticating;
