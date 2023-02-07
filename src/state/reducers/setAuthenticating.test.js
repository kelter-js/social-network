import setAuthenticating from './setAuthenticating';

let state = { isAuthenticating: false }

beforeEach(() => {
  state = { isAuthenticating: false }
});

const getAction = (state) => ({ state });

it('Should set isAuthenticating flag to true', () => {
  const previousState = { ...state };

  setAuthenticating(state, getAction(true));

  expect(previousState.isAuthenticating).not.toBe(state.isAuthenticating);
  expect(state.isAuthenticating).toBe(true);
});

it('Should convert non-boolean value into boolean', () => {
  const previousState = { ...state };

  //instead of boolean value, lets pass through object notation
  setAuthenticating(state, getAction({}));

  expect(previousState.isAuthenticating).not.toBe(state.isAuthenticating);
  expect(state.isAuthenticating).toBe(true);
});
