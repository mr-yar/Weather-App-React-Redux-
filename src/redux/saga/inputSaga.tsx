import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {API_ADRESS, API_KEY} from '../../api';
import {inputSearchPutAction} from '../reducers/inputReducer';

function loadSearcher(value: string) {
  return axios
    .get(`https://${API_ADRESS}?q=${value}&appid=${API_KEY}&units=metric`)
    .then(
      (response) => response.data,
      (error) => ({cod: '404'})
    );
}

function* workerInputSearcher(action: any) {
  const data = yield call(loadSearcher, action.payload);
  yield put(inputSearchPutAction(data));
}

export function* watchInputSearcher() {
  yield takeEvery('INPUT/inputSearchLoadAction', workerInputSearcher);
}
