//@flow

import React from 'react';
import '../App.scss'

export default ({name, className}: { name: string, className?: string }) =>
  <div className={`user-tile ${className || ""}`}>
    {name}
  </div>