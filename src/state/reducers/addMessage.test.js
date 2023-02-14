import addMessage from './addMessage';
import { chat } from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { ...chat }

const action = {
  user: 'testUser',
  text: 'some kind of message',
}

afterEach(() => {
  state = deepClone(chat);
});

it('Should create dialogue and add message in storage chat', () => {
  const previousState = { ...state.messages }
  addMessage(state, action);
  expect(previousState).not.toStrictEqual(state.messages);
});

it('Should add message in already existing dialogue branch', () => {
  const previousLength = state.messages['Some Guy'].length;
  addMessage(state, { ...action, user: 'Some Guy' });
  expect(state.messages['Some Guy'].length).toBe(previousLength + 1);
});

it('Shouldn`t add message in storage if action is empty', () => {
  const previousState = { ...state.messages }
  addMessage(state, {});
  expect(previousState).toStrictEqual(state.messages);
});
