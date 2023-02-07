const setUserData = (state, action) => {
  if (action.data) {
    state.userData = {
      ...state.userData,
      ...action.data,
      isAuthenticated: true,
      loginError: null,
    }
  }

  return state;
}

export default setUserData;
