export const getPageToJump = (state) => {
  return state.users.jumpToPage;
};

export const getMaxJumpWarning = (state) => {
  return state.users.maxJumpWarning;
};

export const getJumpLength = (state) => {
  return state.users.maxJumpLengthText;
};

export const getJumpText = (state) => {
  return state.users.jumpToPageText;
};

export const getEnterHandler = (state) => {
  return state.initial.handlers.onEnter;
};

export const getPagesAmount = (state) => {
  return state.users.totalPagesAmount;
};
