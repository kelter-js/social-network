const setJumpPage = (state, action) => {
  if (action.pageIndex) {
    state.users.jumpToPage = action.pageIndex;
  }

  return state;
}

export default setJumpPage;
