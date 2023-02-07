import changeLikeState from './changeLike';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { pageContent: { ...initialState.pageContent } }

const action = { postId: 0 }

beforeEach(() => {
  state = { pageContent: deepClone(initialState.pageContent) };
});

const setInitialValues = () => {
  state.pageContent.currentUser.feed = [{
    post: 'Hey, is there anybody?',
    likes: 15,
    liked: false,
  }];
}

it('Should increase amount of likes and set post as already liked', () => {
  setInitialValues();
  const likesAmount = state.pageContent.currentUser.feed[0].likes;
  const likeState = state.pageContent.currentUser.feed[0].liked;

  changeLikeState(state, action);

  expect(likesAmount).not.toBe(state.pageContent.currentUser.feed[0].likes);
  expect(likeState).not.toBe(state.pageContent.currentUser.feed[0].liked);
});

it('Shouldn`t change like state if action is empty', () => {
  setInitialValues();
  const likesAmount = state.pageContent.currentUser.feed[0].likes;
  const likeState = state.pageContent.currentUser.feed[0].liked;

  changeLikeState(state, {});

  expect(likesAmount).toBe(state.pageContent.currentUser.feed[0].likes);
  expect(likeState).toBe(state.pageContent.currentUser.feed[0].liked);
});
