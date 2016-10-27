const INITIAL_STATE = {all: [], post: null};
import {FETCH_POSTS} from '../actions/index';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action);
            return {...state, all: action.payload};
        default:
            return state;
    }
}