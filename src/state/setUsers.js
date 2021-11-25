const setUsers = (state, action) => {
  state.users = {...state.users}
  state.users.userList = [...action.userList];
  return state;
}

export { setUsers }
