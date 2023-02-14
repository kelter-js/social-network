const setCurrentPage = (state, action) => {
  if (action.currentPage) {
    state.currentPage = action.currentPage;
  }
  return state;
}

export default setCurrentPage;
