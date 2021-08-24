import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

import appReducer from '.';

let middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
];
if(process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, createLogger({ collapsed: true }) ];
};

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
