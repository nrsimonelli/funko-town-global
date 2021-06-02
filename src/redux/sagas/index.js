import { all } from 'redux-saga/effects';
import popSaga from './popSaga';

export default function* rootSaga() {
  yield all([popSaga()]);
}
