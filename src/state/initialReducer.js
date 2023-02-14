import { defaultMenuPaths, handlers, defaultMenu } from './initialState';

const initialData = {
  defaultMenuPaths,
  handlers,
  defaultMenu
}

const initialReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default initialReducer;
