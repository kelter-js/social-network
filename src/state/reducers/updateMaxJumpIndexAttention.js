const updateMaxJumpIndexAttention = (state, action) => {
  state.users.maxJumpIndexAttention = Boolean(action.status);
  return state;
}

export default updateMaxJumpIndexAttention;
