import { render } from './render.js'
import { store } from './store.js'
import './sass/style.sass'

render(store);

store.observer(render);
