import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//jest jeszcze memoryHistory
import {Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


//var f = (...x) => {return x.reduce((s,e) => s += e,0)}
//rowne
//var g = function(...x){return x.reduce(function(s,e){return s += e},0);}