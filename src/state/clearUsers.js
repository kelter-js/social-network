const clearUsers = (state, action) => {
  state.users = {...state.users}
  state.users.userList.length = [];
  return state;
}

export { clearUsers }
