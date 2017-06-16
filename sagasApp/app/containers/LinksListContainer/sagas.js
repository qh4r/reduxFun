import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { pickTopicFailed, pickTopicSuccess } from './actions';
import { GO_TO_ADD_LINK, PICK_TOPIC_REQUEST } from './constants';
import { push } from 'react-router-redux';

function fetchTopicsCall(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic}/links`).then((res) => res.json());
}

function* fetchTopics({ topicName }) {
  try {
    const result = yield call(fetchTopicsCall, topicName);
    yield put(pickTopicSuccess(result));
  } catch ({ message }) {
    yield put(pickTopicFailed(message));
  }
}

export function* pickTopicSaga() {
  // bedzie trigerowane na routingu
  yield* takeLatest(PICK_TOPIC_REQUEST, fetchTopics);
}

function* goToAddLink({ topic }) {
  yield put(push(`/topics/${topic}/add`));
}

function* goToAddLinkSaga() {
  yield* takeLatest(GO_TO_ADD_LINK, goToAddLink);
}

export default [
  pickTopicSaga,
  goToAddLinkSaga,
];
