import React, {Component, PropTypes} from 'react'

const AsyncControls = ({onIncrement, onDecrement, value}) => {
    return <div>
        <button onClick={onIncrement}> Aync Increment</button>
        <span style={{margin: "0 10px"}}>{value}</span>
        <button onClick={onDecrement}> Aync Decrement</button>
    </div>
}

export default AsyncControls;