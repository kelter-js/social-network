const setTotalUsersCount = (state, action) => {
  state.users.totalPagesAmount = action.pagesAmount;
  return state;
}

export default setTotalUsersCount;
