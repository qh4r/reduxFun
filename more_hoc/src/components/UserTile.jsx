//@flow

type Action = {
  type: string
}

import React from 'react';
import '../App.scss'

export default ({name, className, dispatch}: { name: string, className?: string, dispatch?: (msg: Action) => void }) =>
  <div className={`user-tile ${className || ""}`} onClick={() => dispatch && dispatch({type: "USER_CLICKED"}) }>
    {name}
  </div>