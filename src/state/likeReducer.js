const changeLikeState = (state, action) => {
  state.pageContent = { ...state.pageContent }
  state.pageContent.currentUser.feed = [...state.pageContent.currentUser.feed];
  state.pageContent.currentUser.feed[action.postId] = {...state.pageContent.currentUser.feed[action.postId]}
  const post = state.pageContent.currentUser.feed[action.postId];
  post.liked ? --post.likes : ++post.likes;
  post.liked = !post.liked;
  return state;
}

export { changeLikeState }
