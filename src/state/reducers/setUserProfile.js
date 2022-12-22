const setUserProfile = (state, action) => {
  state.pageContent = {...state.pageContent};
  state.pageContent.currentUser = action.user
  return state;
}

export { setUserProfile }
