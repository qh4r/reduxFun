/*
 *
 * Navigation reducer
 *
 */

import {fromJS} from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: "Cars",
      desc: "Well that's about cars and stuff"
    }, {
      name: "Computers",
      desc: "For the science"
    }, {
      name: "Animals",
      desc: "Not the band, everyone loves them anyways"
    }
  ]
});

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationReducer;
