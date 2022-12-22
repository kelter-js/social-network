const setRequestFrame = (state, action) => {
  state.users = {
    ...state.users,
    lastRequestFrame: action.mark,
  }

  return state;
}

export default setRequestFrame;
