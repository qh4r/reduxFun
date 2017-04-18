import {combineReducers} from "redux"
import {counter2, counter1} from "./reducers";

export default combineReducers({
    counter: counter1,
    asyncCounter: counter2,
})