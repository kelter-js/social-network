const toggleFollow = (state, action) => {
  const [currentElem] = state.users.userList.filter(item => item.id === action.id);
  const indexCurrentElem = state.users.userList.indexOf(currentElem);
  currentElem.followed = action.follow;
  state.users = {...state.users};
  state.users.userList[indexCurrentElem] = {...currentElem};
  return state;
}

export default toggleFollow;
