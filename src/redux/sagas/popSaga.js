import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllPop() {
  try {
    const response = yield axios.get('/api/');
    yield put({ type: 'SET_ALL', payload: response.data });
  } catch (err) {
    console.log('pop get request failed', err);
  }
}

function* popSaga() {
  yield takeLatest('FETCH_ALL', fetchAllPop);
}

export default popSaga;
