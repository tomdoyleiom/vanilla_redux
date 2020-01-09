import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState = {
  themes: [],
};

const store = createStore(rootReducer,
  defaultState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
