import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, REQUEST_TOPICS_FAILED, REQUEST_TOPICS_SUCCEEDED, PICK_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { selectNavigation } from './selectors';
function fetchTopicsCall() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsCall);
    yield put(requestTopicsSucceeded(topics));
  } catch (error) {
    console.log(error);
    yield put(requestTopicsFailed(error));
  }
  // return topics;
}

function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
  // yield* takeLatest(REQUEST_TOPICS, function*() {
  //   console.log("REQUESTTTTT");
  //   const topics = yield* fetchTopics();
  //   console.log(topics);
  // })
}

function* pickDefaultTopic() {
  // select zwraca aktualny state , tutaj trza by zrobic conajmniej toJS
  const state = yield select(selectNavigation());
  console.log('YIELDED STATE',state);
  if (/^\/topics\/[^\/]*$/.test(state.routerLocation) && !state.activeTopic) {
    yield* pushTopicToUrl({ topic: { name: state.topics[0].name } });
  }
}

function* pickDefaultTopicSaga() {
  yield takeLatest(REQUEST_TOPICS_SUCCEEDED, pickDefaultTopic);
}

function* pushTopicToUrl({ topic }) {
  yield put(push(`/topics/${topic.name}`));
}

function* pickTopicSaga() {
  yield takeLatest(PICK_TOPIC, pushTopicToUrl);
}

export default [
  fetchTopicsSaga,
  pickTopicSaga,
  pickDefaultTopicSaga,
];
