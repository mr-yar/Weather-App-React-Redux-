import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {API_ADRESS, API_KEY} from '../../common/api';
import {inputSearchPutAction} from '../reducers/inputReducer';

function loadSearcher(value: string) {
  return axios.get(`${API_ADRESS}/weather?q=${value}&appid=${API_KEY}&units=metric`).then(
    (response) => response.data,
    (error) => ({cod: 404, error})
  );
}

function* workerInputSearcher(action: {type: string; payload: string}) {
  const data = yield call(loadSearcher, action.payload);
  yield put(inputSearchPutAction(data));
}

export function* watchInputSearcher() {
  yield takeEvery('Table/inputSearchLoadAction', workerInputSearcher);
}
