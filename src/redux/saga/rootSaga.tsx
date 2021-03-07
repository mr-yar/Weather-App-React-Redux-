import {all} from 'redux-saga/effects';
import {watchInputSearcher} from './inputSaga';
import {watchTable} from './tableSaga';

export function* rootWatcher() {
  yield all([watchInputSearcher(), watchTable()]);
}
