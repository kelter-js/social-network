const setRequestFrame = (state) => {
  state.users = {
    ...state.users,
    lastRequestFrame: Date.now(),
  }

  return state;
}

export default setRequestFrame;
