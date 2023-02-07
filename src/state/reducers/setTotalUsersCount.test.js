import setTotalUsersCount from './setTotalUsersCount';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) };
});

const action = { pagesAmount: 215 }

it('Should set total amount of users', () => {
  const previousUsersAmount = state.users.totalPagesAmount;

  setTotalUsersCount(state, action);

  expect(previousUsersAmount).not.toBe(state.users.totalPagesAmount);
  expect(state.users.totalPagesAmount).toBe(215);
});

it('Shouldn`t set total amount of users since action is an empty object', () => {
  const previousUsersAmount = state.users.totalPagesAmount;

  setTotalUsersCount(state, {});

  expect(previousUsersAmount).toBe(state.users.totalPagesAmount);
});
