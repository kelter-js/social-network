import setJumpPage from './setJumpPage';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) };
});

const action = { pageIndex: 10 }

it('Should change current page index', () => {
  const previousJumpIndex = state.users.jumpToPage;

  setJumpPage(state, action);

  expect(previousJumpIndex).not.toBe(state.users.jumpToPage);
  expect(state.users.jumpToPage).toBe(10);
});

it('Shouldn`t change page index since action is an empty object', () => {
  const previousPage = state.users.jumpToPage;

  setJumpPage(state, {});

  expect(previousPage).toBe(state.users.jumpToPage);
});
