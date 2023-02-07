import addPost from './addPost';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { pageContent: { ...initialState.pageContent } }

const action = { text: 'some kind of text for new post' }

beforeEach(() => {
  state = { pageContent: deepClone(initialState.pageContent) };
});

it('Should create feed and add post in storage feed', () => {
  const previousState = { ...state.pageContent.currentUser }

  addPost(state, action);

  expect(previousState).not.toStrictEqual(state.pageContent.currentUser);
});

it('Should add post in already existing user feed', () => {
  //adding mock data
  state.pageContent.currentUser.feed = ['someData'];
  const previousLength = state.pageContent.currentUser.feed.length;

  addPost(state, action);

  expect(state.pageContent.currentUser.feed.length).toBe(previousLength + 1);
});

it('Shouldn`t add post in storage if action is empty', () => {
  const previousState = { ...state.pageContent.currentUser }
  addPost(state, {});
  expect(previousState).toStrictEqual(state.pageContent.currentUser);
  //currentUser is an empty object, until any user page will not be opened
  expect(state.pageContent.currentUser.feed).toStrictEqual(undefined);
});

