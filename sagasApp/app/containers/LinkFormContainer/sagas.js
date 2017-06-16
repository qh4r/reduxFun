import { take, call, put, select } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { ADD_LINK_ACTION, ADD_LINK_ACTION_SUCCESS, CANCEL_ADD_ACTION } from './constants';
import { createLink } from '../../api/index';
import { addLinkSuccess } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

function* cancelAdd() {
  yield put(goBack());
}

function* cancelAddSaga() {
  yield* takeLatest([CANCEL_ADD_ACTION, ADD_LINK_ACTION_SUCCESS], cancelAdd);
}

function* addLink({ link }) {
  try {
    const serverLink = yield call(createLink, link);
    yield put(addLinkSuccess(serverLink));
  } catch (e) {
    yield put(addLinkSuccess(link, e.message));
  }
}

function* addLinkSaga() {
  yield* takeLatest(ADD_LINK_ACTION, addLink);
}

// All sagas to be loaded
export default [
  cancelAddSaga,
  addLinkSaga,
];
