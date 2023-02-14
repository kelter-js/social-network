const clearUsers = (state) => {
  state = { ...state }
  state.userList = [];
  return state;
}

export default clearUsers;
