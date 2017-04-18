import {createSelector} from "reselect";

export default createSelector([
    state => state.counter,
    state => state.asyncCounter
], (counterValue, asyncCounterValue) => {
    return (counterValue + asyncCounterValue) % 2 ? "Sum is odd!" : "Sum i even!";
});