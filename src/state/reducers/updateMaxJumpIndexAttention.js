const updateMaxJumpIndexAttention = (state, action) => {
  state.users.maxJumpIndexAttention = action.status;
  return state;
}

export default updateMaxJumpIndexAttention;
