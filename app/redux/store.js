import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import appReducer from '.';

const middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
  createLogger({ collapsed: true })
];

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
