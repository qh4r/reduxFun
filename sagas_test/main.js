import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter'
import AsyncControls from './AsyncControls'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas'

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// to sprawia ze watche staja ie aktywne?
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <div>
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    <AsyncControls
      value={store.getState()}
      onIncrement={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT_ASYNC')} />
    </div>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
