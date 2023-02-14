import setTotalUsersCount from './setTotalUsersCount';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...users }

beforeEach(() => {
  state = deepClone(users);
});

const action = { pagesAmount: 215 }

it('Should set total amount of users', () => {
  const previousUsersAmount = state.totalPagesAmount;

  setTotalUsersCount(state, action);

  expect(previousUsersAmount).not.toBe(state.totalPagesAmount);
  expect(state.totalPagesAmount).toBe(215);
});

it('Shouldn`t set total amount of users since action is an empty object', () => {
  const previousUsersAmount = state.totalPagesAmount;

  setTotalUsersCount(state, {});

  expect(previousUsersAmount).toBe(state.totalPagesAmount);
});
