/*
 *
 * LinksListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
} from './constants';

const initialState = fromJS({
  links: [{
    description: 'some desc',
    url: 'www.wp.pl',
    topicName: 'links',
    id: 'anythig',
  }],
});

function linksListContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksListContainerReducer;
