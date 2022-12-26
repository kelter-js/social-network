export const getPageToJump = (state) => {
  return state.users.jumpToPage;
};

export const getMaxIndex = (state) => {
  return state.users.maxJumpIndexAttention;
};

export const getJumpLength = (state) => {
  return state.users.maxJumpLengthText;
};

export const getJumpText = (state) => {
  return state.users.jumpToPageText;
};

export const getEnterHandler = (state) => {
  return state.handlers.onEnter;
};

export const getPagesAmount = (state) => {
  return state.users.totalPagesAmount;
};
