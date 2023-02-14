import removeLoginError from './removeLoginError';
import { userData } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...userData }

beforeEach(() => {
  state = deepClone(userData);
});

it('Should clear state from login error', () => {
  state.loginError = new Error('Login error');
  const previousState = { ...state.loginError };

  state = removeLoginError(state, {});

  expect(previousState).not.toBe(state.loginError);
  expect(state.loginError).toBe(null);
});
