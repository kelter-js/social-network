import setLoadingState from './setLoadingState';

let state = { isLoading: false }

beforeEach(() => {
  state = { isLoading: false }
});

const getAction = (state) => ({ state });

it('Should set isLoading flag to true', () => {
  const previousState = { ...state };

  setLoadingState(state, getAction(true));

  expect(previousState.isLoading).not.toBe(state.isLoading);
  expect(state.isLoading).toBe(true);
});

it('Should convert non-boolean value into boolean', () => {
  const previousState = { ...state };

  //instead of boolean value, lets pass through object notation
  setLoadingState(state, getAction({}));

  expect(previousState.isLoading).not.toBe(state.isLoading);
  expect(state.isLoading).toBe(true);
});
