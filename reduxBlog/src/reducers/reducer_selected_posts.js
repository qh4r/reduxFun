const INITIAL_STATE = [];

import {CHANGE_SELECTION} from '../actions/index';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTION:
            if(state.indexOf(action.payload) == -1) {
                return [...state, action.payload];
            } else {
                return state.filter(x => x != action.payload);
            }
        default:
            return state
    }
}