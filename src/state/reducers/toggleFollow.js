const toggleFollow = (state, action) => {
  const [currentElem] = state.userList.filter(item => item.id === action.id);
  const indexCurrentElem = state.userList.indexOf(currentElem);

  currentElem.followed = Boolean(action.follow);
  state = { ...state };
  state.userList[indexCurrentElem] = { ...currentElem };

  return state;
}

export default toggleFollow;
