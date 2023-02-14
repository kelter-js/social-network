const setLoadingState = (state, action) => {
  state = { ...state }

  state.isLoading = Boolean(action.state);
  return state;
}

export default setLoadingState;
