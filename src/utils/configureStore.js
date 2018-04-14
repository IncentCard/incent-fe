import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import counterReducer from 'reducers/counter';
import getHistory from 'utils/getHistory';

const reducer = combineReducers({
  counter: counterReducer,
  router: routerReducer,
});

const logger = createLogger({
  collapsed: true,
});

const router = routerMiddleware(getHistory())


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  apiMiddleware,
  router,
  logger,
))(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
