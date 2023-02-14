const removeLoginError = (state) => {
  state = {
    ...state,
    loginError: null,
  }
  return state;
}

export default removeLoginError;
