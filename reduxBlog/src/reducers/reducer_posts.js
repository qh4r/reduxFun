const INITIAL_STATE = {all: [], post: null};
// import _ from 'lodash';
import {FETCH_POSTS, FIND_POST, DELETE_POST} from '../actions/index';

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
        case FIND_POST:
            // let post = _.find(state.all, {id: action.payload});
            let post = action.payload.data;
            return Object.assign({}, state, {post});
            // rownowaznik
            // return {...state, post: post};
        default:
            return state;
    }
}