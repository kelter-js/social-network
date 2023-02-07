const setUserLoginError = (state, action) => {
  if (action.error) {
    state.userData = {
      ...state.userData,
      loginError: action.error,
    }
  }

  return state;
}

export default setUserLoginError;
