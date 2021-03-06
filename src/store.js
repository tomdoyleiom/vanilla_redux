import { applyMiddleware, createStore } from 'redux';

import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const defaultState = {
  themes: [],
};

// sets up a logging instance which will log actions to the console
const logger = createLogger({});

// create an array of all the middleware we're going to use with the store
const middleware = [
  ReduxThunk.withExtraArgument(process.env.API), // this should let us have access to the url
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
