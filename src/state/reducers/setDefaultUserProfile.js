const setDefaultUserProfile = (state, action) => {
  if (action.user) {
    const user = action.user;

    state = { ...state };

    state.currentUser = {
      aboutMe: user.aboutMe,
      contacts: user.contacts,
      lookingForAJob: user.lookingForAJob,
      lookingForAJobDescription: user.lookingForAJobDescription,
      fullName: user.fullName,
      feed: user.feed,
    };
  }

  return state;
};

export default setDefaultUserProfile;
