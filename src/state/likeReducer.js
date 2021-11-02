const changeLikeState = (state, action) => {
  state.pageContent.feed = [...state.pageContent.feed];
  state.pageContent.feed[action.postId] = {...state.pageContent.feed[action.postId]}
  const post = state.pageContent.feed[action.postId];
  post.liked ? --post.likes : ++post.likes;
  post.liked = !post.liked;
  return state;
}

export { changeLikeState }
