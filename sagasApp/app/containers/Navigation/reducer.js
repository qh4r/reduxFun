/*
 *
 * Navigation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PICK_TOPIC,
  REQUEST_TOPICS_SUCCEEDED, TOGGLE_MENU,
} from './constants';

const initialState = fromJS({
  topics: [],
  isMenuOpen: false,
  activeTopic: {},
});

function navigationReducer(state = initialState, action) {
  // const pureState = state.toJS();
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      // return fromJS({ ...pureState, topics: action.topics });
      return state.set('topics', action.topics);
    case TOGGLE_MENU:
      // return fromJS({ ...pureState, isMenuOpen: !pureState.isMenuOpen });
      return state.set('isMenuOpen', !state.get('isMenuOpen'));
    case PICK_TOPIC:
      return state.set('activeTopic', action.topic).set('isMenuOpen', false);
    default:
      return state;
  }
}

export default navigationReducer;
