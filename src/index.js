import { render } from './render.js';
import { storeRedux } from './state/reduxStore.js';
import './sass/style.sass';

const currentState = storeRedux.getState();

render(currentState);

storeRedux.subscribe(() => {
  const updatedState = storeRedux.getState();
  render(updatedState);
})
