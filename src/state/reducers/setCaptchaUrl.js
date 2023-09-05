const setCaptchaUrl = (state, action) => {
  state = { ...state };

  if (action.captchaUrl) {
    state.captchaUrl = action.captchaUrl;
  }

  return state;
};

export default setCaptchaUrl;
