import maxJumpWarning from './maxJumpWarning';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...users }

beforeEach(() => {
  state = deepClone(users);
});

const getAction = (status) => ({ status });

it('Should toggle attention flag in storage', () => {
  const previousAttentionState = state.maxJumpWarning;

  maxJumpWarning(state, getAction(true));

  expect(previousAttentionState).not.toStrictEqual(state.maxJumpWarning);
  expect(state.maxJumpWarning).toStrictEqual(true);
});

it('Should toggle attention flag in storage and then turn it to initial state', () => {
  const previousAttentionState = state.maxJumpWarning;

  maxJumpWarning(state, getAction(true));

  expect(previousAttentionState).not.toStrictEqual(state.maxJumpWarning);
  expect(state.maxJumpWarning).toStrictEqual(true);

  maxJumpWarning(state, getAction(false));

  expect(state.maxJumpWarning).toStrictEqual(false);
});

it('Should convert non-boolean action.status value to boolean', () => {
  const previousAttentionState = state.maxJumpWarning;

  maxJumpWarning(state, getAction({}));

  expect(previousAttentionState).not.toStrictEqual(state.maxJumpWarning);
  expect(state.maxJumpWarning).toStrictEqual(true);
});
