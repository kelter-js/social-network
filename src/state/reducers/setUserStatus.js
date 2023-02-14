const setUserStatus = (state, action) => {
  state = { ...state };
  state.currentUser = { ...state.currentUser, status: action.status || '' };
  return state;
}

export default setUserStatus;
