/*
 *
 * Navigation actions
 *
 */

import {
  PICK_TOPIC,
  REQUEST_TOPICS,
  REQUEST_TOPICS_FAILED,
  REQUEST_TOPICS_SUCCEEDED, TOGGLE_MENU,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(msg) {
  return {
    type: REQUEST_TOPICS_FAILED,
    msg,
  };
}

export function pickTopic(topic) {
  return {
    type: PICK_TOPIC,
    topic,
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}
