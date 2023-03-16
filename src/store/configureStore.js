import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import rootReducer from '../components/reducers';
// import { apiMiddleware } from '../apiMiddleware';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
  collapsed: true
});
// const middlewares = [thunk, apiMiddleware, logger];

export const configureStore = () =>
  createStore(
    rootReducer,
    // applyMiddleware(...middlewares)
  );