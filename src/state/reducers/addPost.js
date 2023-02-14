const addPost = (state, action) => {
  const createPost = (text) => {
    return {
      'post': text,
      'likes': 35,
      'liked': false,
    }
  }

  if (action.text) {
    const previousState = state.currentUser.feed;
    state.currentUser.feed = previousState ? [...previousState] : [];

    state.currentUser.feed.push(createPost(action.text));
  }

  return state;
}

export default addPost;
