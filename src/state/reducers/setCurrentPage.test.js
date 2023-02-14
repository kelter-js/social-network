import setCurrentPage from './setCurrentPage';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...users }

beforeEach(() => {
  state = deepClone(users);
});

const action = { currentPage: 5 }

it('Should change current page index', () => {
  const previousPage = state.currentPage;

  setCurrentPage(state, action);

  expect(previousPage).not.toBe(state.currentPage);
  expect(state.currentPage).toBe(5);
});

it('Shouldn`t change page index since action is an empty object', () => {
  const previousPage = state.currentPage;

  setCurrentPage(state, {});

  expect(previousPage).toBe(state.currentPage);
});
