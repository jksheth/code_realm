import { personWatcher, deleteWatcher } from './person';
import { all } from 'redux-saga/effects';


export default function *rootSaga() {
    yield all([personWatcher(), deleteWatcher()]);
}
