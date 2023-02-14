import setUserLoginError from './setUserLoginError';
import { userData } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...userData }

beforeEach(() => {
  state = deepClone(userData);
});

const action = { error: new Error('Some kind of login error') }

it('Should set user login error object', () => {
  const previousLoginErrorState = state.loginError;

  state = setUserLoginError(state, action);

  expect(previousLoginErrorState).not.toStrictEqual(state.loginError);
  expect(state.loginError).toBe(action.error);
});

it('Shouldn`t set user login error object since action is an empty object', () => {
  const previousLoginErrorState = state.loginError;
  const emptyAction = {};

  state = setUserLoginError(state, emptyAction);

  expect(previousLoginErrorState).toStrictEqual(state.loginError);
  expect(previousLoginErrorState).not.toBe(emptyAction);
});
