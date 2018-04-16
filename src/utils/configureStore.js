import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import counterReducer from 'reducers/counter';
import marqetaReducer from 'reducers/marqeta';
import getHistory from 'utils/getHistory';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login'],
};

const reducer = combineReducers({
  counter: counterReducer,
  router: routerReducer,
  marqeta: persistReducer(persistConfig, marqetaReducer),

  // External
  form: formReducer,
});

const logger = createLogger({
  collapsed: true,
});

const router = routerMiddleware(getHistory())


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  thunk,
  apiMiddleware,
  router,
  logger,
))(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  const persistor = persistStore(store);
  return { store, persistor };
}
