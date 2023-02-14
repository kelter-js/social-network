const setUserProfile = (state, action) => {
  if (action.user) {
    state = { ...state }
    state.currentUser = action.user;
  }

  return state;
}

export default setUserProfile;
