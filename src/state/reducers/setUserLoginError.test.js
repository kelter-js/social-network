import setUserLoginError from './setUserLoginError';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { userData: { ...initialState.userData } }

beforeEach(() => {
  state = { userData: deepClone(initialState.userData) }
});

const action = { error: new Error("Some kind of login error") }

it('Should set user login error object', () => {
  const previousLoginErrorState = { ...state.userData.loginError }

  setUserLoginError(state, action);

  expect(previousLoginErrorState).not.toStrictEqual(state.userData.loginError);
  expect(state.userData.loginError).toBe(action.error);
});

it('Shouldn`t set user login error object since action is an empty object', () => {
  const previousLoginErrorState = state.userData.loginError;
  const emptyAction = {};
  setUserLoginError(state, emptyAction);

  expect(previousLoginErrorState).toStrictEqual(state.userData.loginError);
  expect(previousLoginErrorState).not.toBe(emptyAction);
});
