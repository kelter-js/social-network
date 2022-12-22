const setUserData = (state, action) => {
  state.userData = {
    ...state.userData,
    ...action.data,
    isAuthenticated: true,
    loginError: null,
  }
  return state;
}

export default setUserData;
