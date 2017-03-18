import {SET_SECRET} from "../actions/action_types";

export default function(state = "", action){
    if(action.type == SET_SECRET){
        return action.payload
    }
    return state;
}