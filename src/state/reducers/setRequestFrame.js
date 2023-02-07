const setRequestFrame = (state, action) => {
  if (action.mark) {
    state.users = {
      ...state.users,
      lastRequestFrame: action.mark,
    }
  }

  return state;
}

export default setRequestFrame;
