/*
 *
 * LinksListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { PICK_TOPIC_SUCCESS } from './constants';
import { ADD_LINK_ACTION_SUCCESS } from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});


function addLink(state, link) {
  const links = state.get('links');
  links.push(link);
  return state.set('links', links);
}

function linksListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case PICK_TOPIC_SUCCESS:
      // return fromJS({ ...state.toJS(), links: action.links })
      return state.set('links', action.links);
    case ADD_LINK_ACTION_SUCCESS:
      return addLink(state, action.link);
    default:
      return state;
  }
}

export default linksListContainerReducer;
