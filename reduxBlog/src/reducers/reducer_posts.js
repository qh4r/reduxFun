const INITIAL_STATE = {all: [], post: null};
import {FETCH_POSTS} from '../actions/index';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // var test =  Object.assign(state, {all: action.payload.data}); /// TO EJST PLYTKA KOPIA, MUTACJA, BLAD!!!
            var test =  Object.assign({}, state, {all: action.payload.data}); /// tutaj podstawa to {}
            // redux wykrywa kopie?
            console.log('vv',test);
            // var test =  {...state, all: action.payload.data};
            // console.log('vv',test);
            return test;
        default:
            return state;
    }
}