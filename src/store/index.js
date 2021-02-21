import { createStore, combineReducers, compose } from "redux";

import reducers from "./reducers";

/**
 * Create redux store instance with reducers and middlewares
 *
 * @returns {Object} Redux Store instance
 */
const configureStore = initialState => {
  const composeEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(combineReducers(reducers), initialState, composeEnhancers);

  // init saga

  return store;
}

export default configureStore;
