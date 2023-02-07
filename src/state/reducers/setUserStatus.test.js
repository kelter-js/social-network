import setUserStatus from './setUserStatus';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { pageContent: { ...initialState.pageContent } }

beforeEach(() => {
  state = { pageContent: deepClone(initialState.pageContent) }
});

const action = { status: 'someTestUserStatus' }

it('Should set profile status', () => {
  const previousStatus = state.pageContent.currentUser.status;

  setUserStatus(state, action);

  expect(previousStatus).not.toStrictEqual(state.pageContent.currentUser.status);
  expect(state.pageContent.currentUser.status).toStrictEqual(action.status);
});
