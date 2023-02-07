const setCurrentPage = (state, action) => {
  if (action.currentPage) {
    state.users.currentPage = action.currentPage;
  }
  return state;
}

export default setCurrentPage;
