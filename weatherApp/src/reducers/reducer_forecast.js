import axios from 'axios';

import {FETCH_WEATHER} from '../actions/index'
export default function (state = {}, action) {
    switch (action.type) {
        case `${FETCH_WEATHER}_PENDING`:
            console.log(action);
            return {};
        case `${FETCH_WEATHER}_FULFILLED`:
            console.log(action);
            return {
                isFulfilled: true,
                data: action.payload
            };
        case `${FETCH_WEATHER}_REJECTED`:
            console.log(action);
            return {
                isRejected: true,
                data: action.payload
            };
        default:
            console.log(action);
            return state;
    }
}