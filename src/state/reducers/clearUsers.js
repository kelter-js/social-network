const clearUsers = (state, action) => {
  state.users = { ...state.users }
  state.users.userList = [];
  return state;
}

export default clearUsers;
