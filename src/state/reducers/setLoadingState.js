const setLoadingState = (state, action) => {
  state.isLoading = Boolean(action.state);
  return state;
}

export default setLoadingState;
