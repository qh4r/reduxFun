/*
 *
 * LinksListContainer actions
 *
 */

import { PICK_TOPIC_FAILED, PICK_TOPIC_SUCCESS } from './constants';
export function pickTopicSuccess(links) {
  return {
    type: PICK_TOPIC_SUCCESS,
    links,
  };
}

export function pickTopicFailed(msg) {
  return {
    type: PICK_TOPIC_FAILED,
    msg,
  };
}