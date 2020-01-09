import { applyMiddleware, createStore } from 'redux';

import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const defaultState = {
  themes: [],
};

// sets up a logging instance which will log actions to the console
// TODO: set up so this does not occur on production
const logger = createLogger({});

// create an array of all the middleware we're going to use with the store
const middleware = [
  ReduxThunk,
  logger,
];

// hooks into the redux dev tools extension
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

export default store;
