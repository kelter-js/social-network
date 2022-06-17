const setLoginData = (state, action) => {
  state.loginData = {
    ...state.loginData,
    [action.data.name]: action.data.value,
  };
  return state;
}

export { setLoginData }
