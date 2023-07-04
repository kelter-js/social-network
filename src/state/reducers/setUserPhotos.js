const setUserPhotos = (state, action) => {
  state = { ...state };

  state.currentUser = {
    ...state.currentUser,
    photos: action.photos || { small: "", large: "" },
  };

  return state;
};

export default setUserPhotos;
