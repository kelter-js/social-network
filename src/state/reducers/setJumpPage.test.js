import setJumpPage from './setJumpPage';
import { users } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = {...users }

beforeEach(() => {
  state = deepClone(users);
});

const action = { pageIndex: 10 }

it('Should change current page index', () => {
  const previousJumpIndex = state.jumpToPage;

  setJumpPage(state, action);

  expect(previousJumpIndex).not.toBe(state.jumpToPage);
  expect(state.jumpToPage).toBe(10);
});
