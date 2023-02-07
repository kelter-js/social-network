const setUserProfile = (state, action) => {
  if (action.user) {
    state.pageContent = { ...state.pageContent };
    state.pageContent.currentUser = action.user;
  }

  return state;
}

export default setUserProfile;
