const setJumpPage = (state, action) => {
  state.jumpToPage = action.pageIndex

  return state;
}

export default setJumpPage;
