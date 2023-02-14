import { applyMiddleware, createStore, combineReducers } from 'redux';
import initialReducer from './initialReducer';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import chatReducer from './chatReducer';
import loadingReducer from './loadingReducer';
import userDataReducer from './userDataReducer';

const reducers = combineReducers({
  initial: initialReducer,
  pageContent: profileReducer,
  chat: chatReducer,
  users: usersReducer,
  loading: loadingReducer,
  userData: userDataReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
