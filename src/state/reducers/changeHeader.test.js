import changeHeader from './changeHeader';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { pageContent: { ...initialState.pageContent } }

const action = { text: 'news' }

beforeEach(() => {
  state = { pageContent: deepClone(initialState.pageContent) };
});


it('Should change current header and set correct one', () => {
  const previousState = state.pageContent.currentHeader;

  changeHeader(state, action);

  expect(previousState).not.toBe(state.pageContent.currentHeader);
  expect(state.pageContent.currentHeader).toBe("Новостная лента");
});

it('Shouldn`t change header since action is empty', () => {
  //set initial header
  changeHeader(state, action);
  //trying change header with empty action
  changeHeader(state, {});

  expect(state.pageContent.currentHeader).toBe("Новостная лента");
});

