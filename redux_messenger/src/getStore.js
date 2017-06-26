import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import { users } from '../server/db/User';
import { getDefaultState } from '../server/getDefaultState';
import { initializeDB } from '../server/db/initializeDB';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import { createSocketMiddleware } from './socketMiddleware';
import { RECEIVE_MESSAGE } from './actions/index';
import { getPreloadedState } from './getPreloadedState';

const socketConfigurationOut = {
  UPDATE_STATUS: (data) => ({
    type: 'UPDATE_USER_STATUS',
    status: data,
  }),
};

const socketConfigurationIn = {
  NEW_MESSAGE: (message) => ({
    type: RECEIVE_MESSAGE,
    message
  })
};

const io = window.io;

const socketMiddleware = createSocketMiddleware(io)(socketConfigurationOut);

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const enchancer = compose(
  applyMiddleware(
    socketMiddleware,
    loggerMiddleware
  )
)

initializeDB();

const currentUser = users[0];


const reducer = state => state;

// const defaultState = fromJS(getDefaultState(currentUser));
const defaultState = getPreloadedState();

console.log(defaultState)

const store = createStore(reducer, defaultState, enchancer);

const socket = io();

// nasluchuje na klucze w konfigu
Object.keys(socketConfigurationIn).forEach(key => {
  socket.on(key, (data) => {
    store.dispatch(socketConfigurationIn[key](data));
  })
});

export const getStore = () => store;
