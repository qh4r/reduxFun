import React, {Component, PropTypes} from 'react'

const AsyncControls = ({onIncrement, onDecrement}) => {
  return <div>
    <button onClick={onIncrement}> Aync Increment </button>
    <button onClick={onDecrement}> Aync Decrement </button>
  </div>
}

export default AsyncControls;