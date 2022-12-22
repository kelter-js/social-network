const setUserLoginError = (state, action) => {
  state.userData = {
    ...state.userData,
    loginError: action.error,
  }
  return state;
}

export default setUserLoginError;
