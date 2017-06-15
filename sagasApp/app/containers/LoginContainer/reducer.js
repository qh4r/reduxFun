/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default loginContainerReducer;
