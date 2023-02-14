const setRequestFrame = (state, action) => {
  if (action.mark) {
    state = {
      ...state,
      lastRequestFrame: action.mark,
    }
  }

  return state;
}

export default setRequestFrame;
