import setUserStatus from './setUserStatus';
import { pageContent } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...pageContent }

beforeEach(() => {
  state = deepClone(pageContent);
});

const action = { status: 'someTestUserStatus' }

it('Should set profile status', () => {
  const previousStatus = state.currentUser.status;

  state = setUserStatus(state, action);

  expect(previousStatus).not.toStrictEqual(state.currentUser.status);
  expect(state.currentUser.status).toStrictEqual(action.status);
});
