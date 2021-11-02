const addPost = (state) => {
  const createPost = (text) =>  {
    return {
      'post': text,
      'likes': 35,
      'liked': false,
    }
  }
  state.pageContent.feed.push(createPost(state.pageContent.currentText));
  state.pageContent.currentText = undefined;
  return state;
}

export { addPost }
