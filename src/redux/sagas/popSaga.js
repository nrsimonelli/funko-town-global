import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPopList() {
  try {
    const response = yield axios.get('/api/');
    yield put({ type: 'POP_LIST_SET', payload: response.data });
  } catch (err) {
    yield put({ type: 'POP_LIST_ERROR', err });
  }
}

function* popSaga() {
  yield takeLatest('POP_LIST_FETCH', fetchPopList);
}

export default popSaga;
