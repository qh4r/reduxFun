import {FETCH_WEATHER} from '../actions/index'
export default function (state = null, action) {
    console.log('reducer ',action);
    switch (action.type) {
        case FETCH_WEATHER:
            return action.payload.data
        default:
            return state;
    }
}