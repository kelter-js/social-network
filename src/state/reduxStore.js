import { createStore } from 'redux';
import { reduceHandlers } from './reducers.js';

const storeRedux = createStore(reduceHandlers);

export { storeRedux }
