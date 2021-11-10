const showMoreUsers = (state) => {
  state.users = {...state.users};
  state.users.currentLoadingAmount += state.users.minLoadingAmount;
  if (state.users.currentLoadingAmount > state.users.userList.length) {
    state.users.currentLoadingAmount = state.users.userList.length;
    state.users.allUsersDisplayed = !state.users.allUsersDisplayed;
  }
  return state;
}

export { showMoreUsers }
