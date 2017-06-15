/*
 *
 * LoginContainer actions
 *
 */

import {
  CANCEL_LOGIN_ACTION,
  LOGIN_ACTION,
} from './constants';

export function login(email) {
  return {
    type: LOGIN_ACTION,
    email,
  };
}

export function cancelLogin() {
  return {
    type: CANCEL_LOGIN_ACTION,
  };
}
