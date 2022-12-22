const setUserLogout = (state) => {
  state.userData = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
    status: '',
  }

  return state;
}

export default setUserLogout;
