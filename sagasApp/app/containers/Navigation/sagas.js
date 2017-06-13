import {take, call, put, select} from 'redux-saga/effects';
import {REQUEST_TOPICS, REQUEST_TOPICS_FAILED, REQUEST_TOPICS_SUCCEEDED} from "./constants";
import {takeLatest} from "redux-saga";
import {requestTopicsSucceeded, requestTopicsFailed} from "./actions";

function fetchTopicsCall() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsCall);
    yield put(requestTopicsSucceeded(topics));
  }
  catch (error) {
    console.log(error)
    yield put(requestTopicsFailed(error));
  }
  // return topics;
}

function* fetchTopicsSaga() {
  yield * takeLatest(REQUEST_TOPICS, fetchTopics);
  // yield* takeLatest(REQUEST_TOPICS, function*() {
  //   console.log("REQUESTTTTT");
  //   const topics = yield* fetchTopics();
  //   console.log(topics);
  // })
}

export default [
  fetchTopicsSaga
]