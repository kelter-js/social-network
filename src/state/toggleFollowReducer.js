const toggleFollow = (state, action) => {
  state.users = {...state.users};
  state.users.userList[action.id] = {...state.users.userList[action.id]};
  const currentElem = state.users.userList[action.id];
  currentElem.isFollowed = !currentElem.isFollowed;
  return state;
}

export { toggleFollow }
