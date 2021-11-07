const showMoreUsers = (state) => {
  state.users = {...state.users};
  state.users.currentLoadingAmount += state.users.minLoadingAmount;
  return state;
}

export { showMoreUsers }
