import { put, takeLatest, delay } from 'redux-saga/effects';
import { showPersonSuccess, showPersonError, deletePerson } from '../actions';

let id = 1;
function *fetchPersons() {
    try {
        let response = yield fetch('assignment.json').then(res => res.json());
        if(response) {
            response.map(p => {
                p.isSelected = false;
                p.id = id++;
            });
            yield put(showPersonSuccess(response));
        } else {
            yield put(showPersonError('unable to fetch'));
        }
    } catch (error) {
        yield put (showPersonError('unable to fetch'));
    }
   
}

export function *personWatcher() {
    yield takeLatest('SHOW_ALL', fetchPersons);
}


function *deletePersonSaga() {
    // delete logic
    // yield put(deletePerson());
}

export function *deleteWatcher() {
    yield takeLatest('DELETE_PERSON', deletePersonSaga);
}