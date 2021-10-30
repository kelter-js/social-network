const addPost = (state) => {
  const createPost = (text) =>  {
    return {
      'post': text,
      'likes': 35,
      'liked': false,
    }
  }
  state.feed.push(createPost(state.currentText));
  state.currentText = undefined;

  return state;
}

export { addPost }
