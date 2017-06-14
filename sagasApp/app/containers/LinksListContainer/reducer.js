/*
 *
 * LinksListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { PICK_TOPIC_SUCCESS } from './constants';

const initialState = fromJS({
  links: [],
});

function linksListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case PICK_TOPIC_SUCCESS:
      // return fromJS({ ...state.toJS(), links: action.links })
      return state.set('links', action.links);
    default:
      return state;
  }
}

export default linksListContainerReducer;
