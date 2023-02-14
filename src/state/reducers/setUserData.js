const setUserData = (state, action) => {
  if (action.data) {
    state = {
      ...state,
      ...action.data,
      isAuthenticated: true,
      loginError: null,
    }
  }

  return state;
}

export default setUserData;
