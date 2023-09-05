export const getMenuPaths = (state) => {
  return state.initial.defaultMenuPaths;
};

export const getAuthenticationState = (state) => {
  return state.userData.isAuthenticated;
};

export const getLoadingState = (state) => {
  return state.loading.isLoading;
};

export const getAuthenticatingState = (state) => {
  return state.isAuthenticating;
};

export const getCaptchaUrlState = (state) => {
  return state.userData.captchaUrl;
};
