const setLoadingState = (state, action) => {
  state.users.isLoading = action.state;
  return state;
}

export { setLoadingState }
