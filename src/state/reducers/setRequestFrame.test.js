import setRequestFrame from './setRequestFrame';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) };
});

const mark = Date.now();
const action = { mark: mark }

it('Should change frame timestamp', () => {
  const previousFrameState = state.users.lastRequestFrame;

  setRequestFrame(state, action);

  expect(previousFrameState).not.toBe(state.users.lastRequestFrame);
  expect(state.users.lastRequestFrame).toBe(mark);
});

it('Shouldn`t change frame timestamp since action is an empty object', () => {
  const previousFrameState = state.users.jumpToPage;

  setRequestFrame(state, {});

  expect(previousFrameState).toBe(state.users.jumpToPage);
});
