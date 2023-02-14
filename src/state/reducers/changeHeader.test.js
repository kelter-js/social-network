import changeHeader from './changeHeader';
import { pageContent } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...pageContent }

const action = { text: 'news' }

beforeEach(() => {
  state = deepClone(pageContent);
});


it('Should change current header and set correct one', () => {
  const previousState = state.currentHeader;

  state = changeHeader(state, action);

  expect(previousState).not.toBe(state.currentHeader);
  expect(state.currentHeader).toBe('Новостная лента');
});

it('Shouldn`t change header since action is empty', () => {
  //set initial header
  state = changeHeader(state, action);
  //trying change header with empty action
  state = changeHeader(state, {});

  expect(state.currentHeader).toBe('Новостная лента');
});

