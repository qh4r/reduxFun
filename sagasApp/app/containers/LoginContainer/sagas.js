import { take, call, put, select } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { CANCEL_LOGIN_ACTION, LOGIN_ACTION } from './constants';


function* handleLogin() {
  yield put(goBack()); // cofa sie
}

function* startLoginSaga() {
  yield takeLatest(LOGIN_ACTION, handleLogin);
}

function* cancelLoginSaga() {
  // alternatywa dla take latest
  while (true) {
    yield take(CANCEL_LOGIN_ACTION);
    yield put(goBack());
  }
}

export default [
  startLoginSaga,
  cancelLoginSaga,
];
