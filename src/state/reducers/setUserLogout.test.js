import setUserLogout from './setUserLogout';
import { userData } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...userData }

beforeEach(() => {
  state = deepClone(userData);
});

it('Should clean user data object', () => {
  state = {
    id: 'testId',
    email: 'test@test.test',
    login: 'testLogin',
    isAuthenticated: true,
    status: 'testStatus',
  }
  const previousUserData = { ...state }

  state = setUserLogout(state);

  expect(previousUserData).not.toStrictEqual(state);
  expect(state.id).toBe(null);
  expect(state.email).toBe(null);
  expect(state.login).toBe(null);
  expect(state.isAuthenticated).toBe(false);
  expect(state.status).toBe('');
});
