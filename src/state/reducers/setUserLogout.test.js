import setUserLogout from './setUserLogout';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { userData: { ...initialState.userData } }

beforeEach(() => {
  state = { userData: deepClone(initialState.userData) }
});

it('Should clean user data object', () => {
  state.userData = {
    id: 'testId',
    email: 'test@test.test',
    login: 'testLogin',
    isAuthenticated: true,
    status: 'testStatus',
  }
  const previousUserData = { ...state.userData }

  setUserLogout(state);

  expect(previousUserData).not.toStrictEqual(state.userData);
  expect(state.userData.id).toBe(null);
  expect(state.userData.email).toBe(null);
  expect(state.userData.login).toBe(null);
  expect(state.userData.isAuthenticated).toBe(false);
  expect(state.userData.status).toBe('');
});
