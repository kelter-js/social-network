const removeLoginError = (state, action) => {
  state.userData = {
    ...state.userData,
    loginError: null,
  }
  return state;
}

export default removeLoginError;
