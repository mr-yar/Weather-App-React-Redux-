import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {API_ADRESS, API_KEY} from '../../common/api';
import {tablePutAction} from '../reducers/tableReducer';

function loadTable(value: string) {
  return axios
    .get(`${API_ADRESS}/forecast?q=${value}&appid=${API_KEY}&units=metric`)
    .then(
      (response) => response.data,
      (error) => ({cod: '404', error})
    );
}

function* workerTable(action: any) {
  const data = yield call(loadTable, action.payload);
  yield put(tablePutAction(data));
}

export function* watchTable() {
  yield takeEvery('Table/tableLoadAction', workerTable);
}
