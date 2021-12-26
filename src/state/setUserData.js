const setUserData = (state, action) => {
  state.userData = {
    ...state.userData,
    ...action.data,
    isAuthenticated: true,
  }
  return state;
}

export { setUserData }
