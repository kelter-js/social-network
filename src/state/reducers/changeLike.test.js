import changeLikeState from './changeLike';
import { pageContent } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...pageContent }

const action = { postId: 0 }

beforeEach(() => {
  state = deepClone(pageContent);
});

const setInitialValues = () => {
  state.currentUser.feed = [{
    post: 'Hey, is there anybody?',
    likes: 15,
    liked: false,
  }];
}

it('Should increase amount of likes and set post as already liked', () => {
  setInitialValues();
  const likesAmount = state.currentUser.feed[0].likes;
  const likeState = state.currentUser.feed[0].liked;

  state = changeLikeState(state, action);

  expect(likesAmount).not.toBe(state.currentUser.feed[0].likes);
  expect(likeState).not.toBe(state.currentUser.feed[0].liked);
});

it('Shouldn`t change like state if action is empty', () => {
  setInitialValues();
  const likesAmount = state.currentUser.feed[0].likes;
  const likeState = state.currentUser.feed[0].liked;

  state = changeLikeState(state, {});

  expect(likesAmount).toBe(state.currentUser.feed[0].likes);
  expect(likeState).toBe(state.currentUser.feed[0].liked);
});
