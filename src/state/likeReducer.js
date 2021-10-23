const changeLikeState = (state, like) => {
  like ? ++state.likes : --state.likes;
  return state;
}

export { changeLikeState }
