import setUserData from './setUserData';
import { userData } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...userData }

beforeEach(() => {
  state = deepClone(userData);
});

const action = {
  data: {
    id: 21510,
    login: 'someKindOfLogin',
    email: 'someKindOfEmail@email.com'
  }
}

it('Should set user data', () => {
  const previousUserData = { ...state };

  state = setUserData(state, action);

  expect(previousUserData).not.toStrictEqual(state);
});

it('Should set flag isAuthenticated to true', () => {
  state = setUserData(state, action);

  expect(state.isAuthenticated).toStrictEqual(true);
});

it('Should set flag loginError to null', () => {
  state.loginError = new Error('Login error');
  const previousLoginErrorState = { ...state.loginError }
  state = setUserData(state, action);

  expect(previousLoginErrorState).not.toBe(state.loginError);
  expect(state.loginError).toStrictEqual(null);
});

it('Should set user id from action', () => {
  state = setUserData(state, action);

  expect(state.id).toStrictEqual(action.data.id);
});

it('Should set login from action', () => {
  state = setUserData(state, action);

  expect(state.login).toStrictEqual(action.data.login);
});

it('Should set email from action', () => {
  state = setUserData(state, action);

  expect(state.email).toStrictEqual(action.data.email);
});

it('Shouldn`t set user data since action is an empty object', () => {
  const previousUserData = { ...state };

  state = setUserData(state, {});

  expect(previousUserData).toStrictEqual(state);
  expect(state.id).toBe(null);
  expect(state.email).toBe(null);
  expect(state.login).toBe(null);
  expect(state.isAuthenticated).toBe(false);
  expect(state.status).toBe('');
  expect(state.loginError).toBe(null);
});
