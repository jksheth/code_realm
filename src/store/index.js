import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const saga = createSagaMiddleware(),
 store = createStore(reducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
