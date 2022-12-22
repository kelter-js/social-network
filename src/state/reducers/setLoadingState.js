const setLoadingState = (state, action) => {
  state.isLoading = action.state;
  return state;
}

export default setLoadingState;
