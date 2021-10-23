import { render } from './render.js';
import { store } from './state/state.js';
import './sass/style.sass'

render(store);

store.observer(render);
