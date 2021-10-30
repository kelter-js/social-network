const changeLikeState = (state) => {
  state.liked ? --state.likes : ++state.likes;
  state.liked = !state.liked;
  return state;
}

export { changeLikeState }
