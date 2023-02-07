import setCurrentPage from './setCurrentPage';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { users: { ...initialState.users } }

beforeEach(() => {
  state = { users: deepClone(initialState.users) };
});

const action = { currentPage: 5 }

it('Should change current page index', () => {
  const previousPage = state.users.currentPage;

  setCurrentPage(state, action);

  expect(previousPage).not.toBe(state.users.currentPage);
  expect(state.users.currentPage).toBe(5);
});

it('Shouldn`t change page index since action is an empty object', () => {
  const previousPage = state.users.currentPage;

  setCurrentPage(state, {});

  expect(previousPage).toBe(state.users.currentPage);
});
