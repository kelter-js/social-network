import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers.js';
import  thunkMiddleware from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export { store }
