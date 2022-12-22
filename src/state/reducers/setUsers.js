const setUsers = (state, action) => {
  if (action.mark < state.users.lastRequestFrame) {
    state.isLoading = true;
    return state;
  }

  state.users = { ...state.users }
  state.users.userList = action.list;
  state.isLoading = false;
  return state;
}

export default setUsers;
