import addPost from './addPost';
import { pageContent } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...pageContent }

const action = { text: 'some kind of text for new post' }

beforeEach(() => {
  state = deepClone(pageContent);
});

it('Should create feed and add post in storage feed', () => {
  const previousState = { ...state.currentUser }

  addPost(state, action);

  expect(previousState).not.toStrictEqual(state.currentUser);
});

it('Should add post in already existing user feed', () => {
  //adding mock data
  state.currentUser.feed = ['someData'];
  const previousLength = state.currentUser.feed.length;

  addPost(state, action);

  expect(state.currentUser.feed.length).toBe(previousLength + 1);
});

it('Shouldn`t add post in storage if action is empty', () => {
  const previousState = { ...state.currentUser }
  addPost(state, {});
  expect(previousState).toStrictEqual(state.currentUser);
  //currentUser is an empty object, until any user page will not be opened
  expect(state.currentUser.feed).toStrictEqual(undefined);
});

