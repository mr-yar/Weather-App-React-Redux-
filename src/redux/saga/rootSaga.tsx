import {all} from 'redux-saga/effects';
import {watchInputSearcher} from './inputSaga';

export function* rootWatcher() {
  yield all([watchInputSearcher()]);
}
