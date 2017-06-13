/*
 *
 * Navigation reducer
 *
 */

import {fromJS} from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED
} from './constants';

const initialState = fromJS({
  topics: [
  ]
});

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return fromJS({...state, topics: action.topics});
    default:
      return state;
  }
}

export default navigationReducer;
