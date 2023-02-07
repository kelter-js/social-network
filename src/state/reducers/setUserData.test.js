import setUserData from './setUserData';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { userData: { ...initialState.userData } }

beforeEach(() => {
  state = { userData: deepClone(initialState.userData) };
});

const action = {
  data: {
    id: 21510,
    login: "someKindOfLogin",
    email: "someKindOfEmail@email.com"
  }
}

it('Should set user data', () => {
  const previousUserData = { ...state.userData };

  setUserData(state, action);

  expect(previousUserData).not.toStrictEqual(state.userData);
});

it('Should set flag isAuthenticated to true', () => {
  setUserData(state, action);

  expect(state.userData.isAuthenticated).toStrictEqual(true);
});

it('Should set flag loginError to null', () => {
  state.userData.loginError = new Error("Login error");
  const previousLoginErrorState = { ...state.userData.loginError }
  setUserData(state, action);

  expect(previousLoginErrorState).not.toBe(state.userData.loginError);
  expect(state.userData.loginError).toStrictEqual(null);
});

it('Should set user id from action', () => {
  setUserData(state, action);

  expect(state.userData.id).toStrictEqual(action.data.id);
});

it('Should set login from action', () => {
  setUserData(state, action);

  expect(state.userData.login).toStrictEqual(action.data.login);
});

it('Should set email from action', () => {
  setUserData(state, action);

  expect(state.userData.email).toStrictEqual(action.data.email);
});

it('Shouldn`t set user data since action is an empty object', () => {
  const previousUserData = { ...state.userData };

  setUserData(state, {});

  expect(previousUserData).toStrictEqual(state.userData);
  expect(state.userData.id).toBe(null);
  expect(state.userData.email).toBe(null);
  expect(state.userData.login).toBe(null);
  expect(state.userData.isAuthenticated).toBe(false);
  expect(state.userData.status).toBe('');
  expect(state.userData.loginError).toBe(null);
});
