import setRequestFrame from './setRequestFrame';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...users }

beforeEach(() => {
  state = deepClone(users);
});

const mark = Date.now();
const action = { mark: mark }

it('Should change frame timestamp', () => {
  const previousFrameState = state.lastRequestFrame;

  state = setRequestFrame(state, action);

  expect(previousFrameState).not.toBe(state.lastRequestFrame);
  expect(state.lastRequestFrame).toBe(mark);
});

it('Shouldn`t change frame timestamp since action is an empty object', () => {
  const previousFrameState = state.lastRequestFrame;

  state = setRequestFrame(state, {});

  expect(previousFrameState).toBe(state.lastRequestFrame);
});
