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
  activeTopic: '',
  routerLocation: '',
});

function navigationReducer(state = initialState, action) {
  // const pureState = state.toJS();
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      // return fromJS({ ...pureState, topics: action.topics });
      return state.set('topics', action.topics);
    case '@@router/LOCATION_CHANGE':
      // standardowa akcja react-redux-routera
      // jej payload jest dosc rozbudowany
      return state.set('routerLocation', action.payload.pathname);
    case TOGGLE_MENU:
      // return fromJS({ ...pureState, isMenuOpen: !pureState.isMenuOpen });
      return state.set('isMenuOpen', !state.get('isMenuOpen'));
    case PICK_TOPIC:
      return state.set('activeTopic', action.topic.name).set('isMenuOpen', false);
    default:
      return state;
  }
}

export default navigationReducer;
