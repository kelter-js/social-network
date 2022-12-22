const setCurrentPage = (state, action) => {
  state.users.currentPage = action.currentPage;
  return state;
}

export { setCurrentPage }
