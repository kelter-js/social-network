const addPost = (state, action) => {
  const createPost = (text) =>  {
    return {
      'post': text,
      'likes': 35,
      'liked': false,
    }
  }

  state.pageContent = { ...state.pageContent }

  if (!state.pageContent.currentUser.feed) {
    state.pageContent.currentUser.feed = [];
  }

  state.pageContent.currentUser.feed.push(createPost(action.text));
  return state;
}

export { addPost }
