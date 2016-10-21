import {FETCH_WEATHER} from '../actions/index'
export default function (state = [], action) {
    console.log('reducer ',action);
    switch (action.type) {
        case FETCH_WEATHER:
            // REDUCER ZAWSZE MUSI ZWRACAC NOWY OBIEKT

            // [x,y ...[t]] ro bi to co concat - rozwija wstawiana tablice (t) do elementow
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state]
        default:
            return state;
    }
}