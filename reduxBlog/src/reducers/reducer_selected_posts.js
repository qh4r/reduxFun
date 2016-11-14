const INITIAL_STATE = {selectedPosts: []};

import {CHANGE_SELECTION} from '../actions/index';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTION:
            if(state.selectedPosts.indexOf(action.payload) == -1) {
                return {selectedPosts: [...state.selectedPosts, action.payload]}
            } else {
                return {selectedPosts: state.selectedPosts.filter(x => x != action.payload)}
            }
        default:
            return state
    }
}