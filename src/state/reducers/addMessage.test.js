import addMessage from './addMessage';
import initialState from '../initialState';
import deepClone from '../../utils/deepClone';

let state = { chat: { ...initialState.chat } }

const action = {
  user: 'testUser',
  text: 'some kind of message',
}

afterEach(() => {
  state = { chat: deepClone(initialState.chat) };
});

it('Should create dialogue and add message in storage chat', () => {
  const previousState = { ...state.chat.messages }
  addMessage(state, action);
  expect(previousState).not.toStrictEqual(state.chat.messages);
});

it('Should add message in already existing dialogue branch', () => {
  const previousLength = state.chat.messages['Some Guy'].length;
  addMessage(state, { ...action, user: 'Some Guy' });
  expect(state.chat.messages['Some Guy'].length).toBe(previousLength + 1);
});

it('Shouldn`t add message in storage if action is empty', () => {
  const previousState = { ...state.chat.messages }
  addMessage(state, {});
  expect(previousState).toStrictEqual(state.chat.messages);
});
