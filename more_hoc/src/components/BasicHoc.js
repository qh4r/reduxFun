//@flow

import React from 'react';

export default (enforceProps: any) =>
  (BaseComponent: any) =>
    (props: any) =>
      <BaseComponent {...props} {...enforceProps}/>
      //drugi spread nadpisze pola z 1 tak jak w obiekcie