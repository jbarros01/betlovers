import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducers from "./reducers";
import rootSaga from './saga';

/**
 * Create redux store instance with reducers and middlewares
 *
 * @returns {Object} Redux Store instance
 */
const configureStore = initialState => {
  const isDevelopment = process.env.REACT_APP_NODE_ENV === 'development';

  const composeEnhancers =
    (isDevelopment &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
      })) ||
    compose;

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga)

  return store;
}

export default configureStore;
