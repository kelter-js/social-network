const changeLikeState = (state, action) => {
  if (action.postId !== undefined && action.postId !== null) {
    state.pageContent = { ...state.pageContent }
    state.pageContent.currentUser.feed = [...state.pageContent.currentUser.feed];
    state.pageContent.currentUser.feed[action.postId] = { ...state.pageContent.currentUser.feed[action.postId] }

    const post = state.pageContent.currentUser.feed[action.postId];
    post.liked ? --post.likes : ++post.likes;
    post.liked = !post.liked;
  }

  return state;
}

export default changeLikeState;
