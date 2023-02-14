const setTotalUsersCount = (state, action) => {
  if (action.pagesAmount) {
    state.totalPagesAmount = action.pagesAmount;
  }

  return state;
}

export default setTotalUsersCount;
