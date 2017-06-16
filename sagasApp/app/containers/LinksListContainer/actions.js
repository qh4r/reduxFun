/*
 *
 * LinksListContainer actions
 *
 */

import { PICK_TOPIC_FAILED, PICK_TOPIC_REQUEST, PICK_TOPIC_SUCCESS, GO_TO_ADD_LINK } from './constants';
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

export function requestLinks(topicName) {
  return {
    type: PICK_TOPIC_REQUEST,
    topicName,
  };
}

export function goToAddLink(topic) {
  return {
    type: GO_TO_ADD_LINK,
    topic,
  };
}