export const getMenuPaths = (state) => {
  return state.defaultMenuPaths;
};

export const getAuthenticationState = (state) => {
  return state.userData.isAuthenticated;
};

export const getLoadingState = (state) => {
  return state.isLoading;
};

export const getAuthenticatingState = (state) => {
  return state.isAuthenticating;
};
