const setUserStatus = (state, action) => {
  state.pageContent = { ...state.pageContent };
  state.pageContent.currentUser = { ...state.pageContent.currentUser, status: action.status || '' };
  return state;
}

export default setUserStatus;
