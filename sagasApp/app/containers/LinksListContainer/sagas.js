import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { pickTopicFailed, pickTopicSuccess } from './actions';
import { PICK_TOPIC } from '../Navigation/constants';

function fetchTopicsCall(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`).then((res) => res.json());
}

function* fetchTopics({ topic }) {
  try {
    const result = yield call(fetchTopicsCall, topic);
    console.log('LINKS FetCHED', result);
    yield put(pickTopicSuccess(result));
  } catch ({ message }) {
    yield put(pickTopicFailed(message));
  }
}

export function* pickTopicSaga() {
  // bedzie trigerowane na routingu
  // yield* takeLatest(PICK_TOPIC, fetchTopics);
}

export default [
  pickTopicSaga,
];
