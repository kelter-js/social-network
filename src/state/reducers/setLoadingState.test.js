import setLoadingState from './setLoadingState';
import { loading } from '../../state/initialState';
import deepClone from '../../utils/deepClone';

let state = { ...loading }

beforeEach(() => {
  state = deepClone(loading);
});

const getAction = (state) => ({ state });

it('Should set isLoading flag to true', () => {
  const previousState = { ...state };

  state = setLoadingState(state, getAction(true));

  expect(previousState.isLoading).not.toBe(state.isLoading);
  expect(state.isLoading).toBe(true);
});

it('Should convert non-boolean value into boolean', () => {
  const previousState = { ...state };

  //instead of boolean value, lets pass through object notation
  state = setLoadingState(state, getAction({}));

  expect(previousState.isLoading).not.toBe(state.isLoading);
  expect(state.isLoading).toBe(true);
});
