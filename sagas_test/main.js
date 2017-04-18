import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducers_root from "./reducers_index"

import Counter from './Counter'
import AsyncControls from './AsyncControls'
import isEvenSelector from "./selector";

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers_root, applyMiddleware(sagaMiddleware));

// to sprawia ze watche staja ie aktywne?
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
    let state = store.getState();

    // should have that i map state to props
    let evenOrOdd = isEvenSelector(state);

    ReactDOM.render(
        <div>
            <Counter
                value={state.counter}
                onIncrement={() => action('INCREMENT_1')}
                onDecrement={() => action('DECREMENT_1')}/>
            <hr/>
            <AsyncControls
                value={state.asyncCounter}
                onIncrement={() => action('INCREMENT_ASYNC')}
                onDecrement={() => action('DECREMENT_ASYNC')}/>
            <p>Check: {evenOrOdd}</p>
        </div>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
