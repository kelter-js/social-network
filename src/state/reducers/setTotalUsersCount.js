const setTotalUsersCount = (state, action) => {
  if (action.pagesAmount) {
    state.users.totalPagesAmount = action.pagesAmount;
  }

  return state;
}

export default setTotalUsersCount;
