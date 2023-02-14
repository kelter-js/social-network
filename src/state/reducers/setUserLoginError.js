const setUserLoginError = (state, action) => {
  if (action.error) {
    state = {
      ...state,
      loginError: action.error,
    }
  }

  return state;
}

export default setUserLoginError;
