/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK_ACTION, ADD_LINK_ACTION_FAILED, ADD_LINK_ACTION_SUCCESS,
  CANCEL_ADD_ACTION,
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function cancelAdd() {
  return {
    type: CANCEL_ADD_ACTION,
  };
}

export function addLink(link) {
  return {
    type: ADD_LINK_ACTION,
    link,
  };
}


export function addLinkFailed(link, msg) {
  return {
    type: ADD_LINK_ACTION_FAILED,
    link,
    msg
  };
}


export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_ACTION_SUCCESS,
    link,
  };
}
