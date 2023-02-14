const maxJumpWarning = (state, action) => {
  state.maxJumpWarning = Boolean(action.status);
  return state;
}

export default maxJumpWarning;
