import removeLoginError from './removeLoginError';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { userData: { ...initialState.userData } }

beforeEach(() => {
  state = { userData: deepClone(initialState.userData) };
});

it('Should clear state from login error', () => {
  state.userData.loginError = new Error("Login error");
  const previousState = { ...state.userData.loginError };

  removeLoginError(state, {});

  expect(previousState).not.toBe(state.userData.loginError);
  expect(state.userData.loginError).toBe(null);
});
