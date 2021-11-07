const setUsers = (state, action) => {
  state.users.userList = [...state.users.userList, ...action.userList];
  return state;
}

export { setUsers }
