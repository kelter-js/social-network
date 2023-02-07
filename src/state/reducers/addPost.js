const addPost = (state, action) => {
  const createPost = (text) => {
    return {
      'post': text,
      'likes': 35,
      'liked': false,
    }
  }

  if (action.text) {
    state.pageContent = { ...state.pageContent }

    const previousState = state.pageContent.currentUser.feed;
    state.pageContent.currentUser.feed = previousState ? [...previousState] : [];

    state.pageContent.currentUser.feed.push(createPost(action.text));
  }

  return state;
}

export default addPost;
