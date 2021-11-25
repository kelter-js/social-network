const setJumpPage = (state, action) => {
  state.users.jumpToPage = action.pageIndex;
  return state;
}

export { setJumpPage }
