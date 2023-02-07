import updateMaxJumpIndexAttention from './updateMaxJumpIndexAttention';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) }
});

const getAction = (status) => ({ status });

it('Should toggle attention flag in storage', () => {
  const previousAttentionState = state.users.maxJumpIndexAttention;

  updateMaxJumpIndexAttention(state, getAction(true));

  expect(previousAttentionState).not.toStrictEqual(state.users.maxJumpIndexAttention);
  expect(state.users.maxJumpIndexAttention).toStrictEqual(true);
});

it('Should toggle attention flag in storage and then turn it to initial state', () => {
  const previousAttentionState = state.users.maxJumpIndexAttention;

  updateMaxJumpIndexAttention(state, getAction(true));

  expect(previousAttentionState).not.toStrictEqual(state.users.maxJumpIndexAttention);
  expect(state.users.maxJumpIndexAttention).toStrictEqual(true);

  updateMaxJumpIndexAttention(state, getAction(false));

  expect(state.users.maxJumpIndexAttention).toStrictEqual(false);
});

it('Should convert non-boolean action.status value to boolean', () => {
  const previousAttentionState = state.users.maxJumpIndexAttention;

  updateMaxJumpIndexAttention(state, getAction({}));

  expect(previousAttentionState).not.toStrictEqual(state.users.maxJumpIndexAttention);
  expect(state.users.maxJumpIndexAttention).toStrictEqual(true);
});
