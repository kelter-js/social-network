const changeLikeState = (state, action) => {
  if (action.postId !== undefined && action.postId !== null) {
    state = { ...state }
    state.currentUser.feed = [...state.currentUser.feed];
    state.currentUser.feed[action.postId] = { ...state.currentUser.feed[action.postId] }

    const post = state.currentUser.feed[action.postId];
    post.liked ? --post.likes : ++post.likes;
    post.liked = !post.liked;
  }

  return state;
}

export default changeLikeState;
