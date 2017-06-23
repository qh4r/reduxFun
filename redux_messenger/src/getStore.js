import {
  applyMiddleware,
  createStore,
} from 'redux';
import { users } from '../server/db/User';
import { getDefaultState } from '../server/getDefaultState';
import { initializeDB } from '../server/db/initializeDB';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';

initializeDB();

const currentUser = users[0];


const reducer = state => state;

const defaultState = fromJS(getDefaultState(currentUser));

console.log(defaultState)

const store = createStore(reducer, defaultState, applyMiddleware(createLogger({
  stateTransformer: state => state.toJS(),
})));

export const getStore = () => store;
