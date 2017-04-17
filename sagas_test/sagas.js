import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* decrementAsync() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' })
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', incrementAsync)
}

// takie wywolanie powoduje uruchomienie generatorow rownolegle - uruchamiamy watche
export default function* rootSaga() {
  yield [
    startSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ]
}

export function* startSaga() {
  console.log('Sagi uruchomione!')
}