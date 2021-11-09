const toggleFollow = (state, action) => {
  const [currentElem] = state.users.userList.filter(item => item.id === action.id);
  const indexCurrentElem = state.users.userList.indexOf(currentElem);
  currentElem.followed = !currentElem.followed;
  state.users = {...state.users};
  state.users.userList[indexCurrentElem] = {...state.users.userList[indexCurrentElem]};
  return state;
}

export { toggleFollow }
