const setUsers = (state, action) => {
  if (action.mark < state.lastRequestFrame) {
    return state;
  }

  if (action.list) {
    state = { ...state }
    state.userList = action.list;
  }

  return state;
}

export default setUsers;
